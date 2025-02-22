import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

const  supabase = createClient(URL, KEY);


export default supabase;

