import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Home from "./Home";
import Auth from "./Auth";

function App() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return <>

    {!user ? <Auth supabase={supabase} /> : <Home user={user} supabase={supabase} />}


  </>

}

export default App
