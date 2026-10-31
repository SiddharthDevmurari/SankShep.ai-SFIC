import { createClient } from '@supabase/supabase-js'

/**
 * The Supabase project comes from VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
 * (main/.env.local locally, project env vars on the host). The publishable key
 * is designed to ship in client bundles: data access is enforced by Row Level
 * Security policies (see supabase/schema.sql), not by keeping this key secret.
 */
export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL ?? '').trim()
export const SUPABASE_PUBLISHABLE_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? '').trim()

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error('Supabase is not configured: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in main/.env.local.')
}

/** Must match public.admin_email() in supabase/schema.sql. */
export const ADMIN_EMAIL = 'admin@gmail.com'

/** Shared demo account, created by supabase/schema.sql. Must match public.demo_email(). */
export const DEMO_EMAIL = 'demo@gmail.com'
export const DEMO_PASSWORD = 'Demo@1234'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false, // no email links are used
    storageKey: 'sankshep-v2-auth', // differs from the original project, so its old sessions are never picked up
  },
})

/** Postgres/PostgREST codes meaning schema.sql hasn't been run yet. */
export function isMissingSchemaError(err: { code?: string } | null | undefined): boolean {
  return err?.code === 'PGRST205' || err?.code === '42P01' || err?.code === 'PGRST202'
}
