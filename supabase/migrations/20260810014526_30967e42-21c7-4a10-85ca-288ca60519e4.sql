-- 1) Pin search_path on all SECURITY DEFINER functions
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = pg_catalog, public, pgmq;
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = pg_catalog, public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = pg_catalog, public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = pg_catalog, public, pgmq;

-- 2) Revoke EXECUTE from anon/authenticated/public on internal SECURITY DEFINER functions
REVOKE ALL ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.email_queue_dispatch() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.email_queue_wake() FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.email_queue_dispatch() TO service_role;

-- 3) contact_submissions: keep reads fail-closed and explicit
REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM anon, authenticated;
