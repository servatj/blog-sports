import React from "react";
import AuthComponent from "./auth-component";
import NavComponent from "./nav-component";
import { isDevMode } from "@/lib/utils/is-dev-mode";

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="w-full bg-white text-black py-2 px-6 flex justify-between items-center">
        <p>Latest News: Your latest news content here...</p>
        {isDevMode() && <AuthComponent className="" />}
      </div>
      <div className="sm:px-12 px-6 flex items-center h-20 space-x-0 justify-between sm:space-x-0 bg-red-700">
        <NavComponent />
        <div className="flex items-center gap-4">
          {/* <AdminButtons /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
