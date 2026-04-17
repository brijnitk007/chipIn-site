import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://nnmkaguhgeqdedibcljl.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjAzZGJmYmVlLTRmNmMtNGQ1NC1iZDM0LTFlYTRiNjNkMWFlMSJ9.eyJwcm9qZWN0SWQiOiJubm1rYWd1aGdlcWRlZGliY2xqbCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc2NDU0ODc0LCJleHAiOjIwOTE4MTQ4NzQsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.bLd0xpDFQJi-te3-3bgOtFHZqs-osz9FCHVz9oy000c';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };