import Title from "@/components/ui/title";
import React from "react";
import { TfiBolt } from "react-icons/tfi";

const AuthNavbar = () => {
  return (
    <header className="w-full p-3">
      <nav className="w-[80%] mx-auto">
        <div className="flex items-center gap-1">
          <TfiBolt size={50} />
          <Title className="text-2xl font-semibold leading-tight tracking-tighter" title="Quicksave" />
        </div>
      </nav>
    </header>
  );
};

export default AuthNavbar;
