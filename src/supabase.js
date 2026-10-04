import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabaseConfigured = Boolean(url && publishableKey)
export const supabase = supabaseConfigured ? createClient(url, publishableKey) : null
