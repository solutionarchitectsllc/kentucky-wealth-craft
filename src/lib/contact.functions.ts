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

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      business_name: data.businessName || null,
      email: data.email,
      phone: data.phone || null,
      service: data.service,
      message: data.message,
    });

    if (error) {
      console.error("contact_submissions insert failed:", error.message);
      throw new Error("Could not save your request. Please try again.");
    }

    return { ok: true };
  });
