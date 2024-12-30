import React from "react";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./logout-button";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

async function AuthComponent({ className }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="">
      {user?.email ? (
        <LogoutButton userEmail={user.email} />
      ) : (
        <button
          className={`bg-black text-white border border-white rounded px-4 py-2 ${className}`}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default AuthComponent;
