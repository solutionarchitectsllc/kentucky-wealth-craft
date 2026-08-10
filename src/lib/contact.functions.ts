import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(100),
  businessName: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(2000),
});

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: inserted, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
      name: data.name,
      business_name: data.businessName || null,
      email: data.email,
      phone: data.phone || null,
      service: data.service,
      message: data.message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("contact_submissions insert failed:", error.message);
      throw new Error("Could not save your request. Please try again.");
    }

    // Notify the business owners. Failures here must not block the visitor.
    try {
      const { sendInternalTransactionalEmail } = await import(
        "@/lib/email/send-internal.server"
      );
      const templateData = {
        name: data.name,
        businessName: data.businessName || "",
        email: data.email,
        phone: data.phone || "",
        service: data.service,
        message: data.message,
        submittedAt: new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
          dateStyle: "medium",
          timeStyle: "short",
        }),
      };

      const recipients = [
        "notify@solutionarchitectsllc.com",
        "ianeady07@gmail.com",
      ];

      await Promise.all(
        recipients.map((recipientEmail) =>
          sendInternalTransactionalEmail({
            templateName: "contact-request",
            recipientEmail,
            idempotencyKey: `contact-request-${inserted.id}-${recipientEmail}`,
            templateData,
          }),
        ),
      );
    } catch (notifyError) {
      console.error("Contact notification email failed:", notifyError);
    }

    return { ok: true };
  });
