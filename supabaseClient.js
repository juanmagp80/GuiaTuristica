import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_KEY = 'tu-api-key-publica';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
