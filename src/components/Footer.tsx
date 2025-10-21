import React from "react";
import logo from "../assets/logo-footer.png";

export default function Footer() {
  return (
   <footer className="bg-black text-white py-4 px-8 mt-auto w-full flex flex-col items-center md:flex-row md:justify-between md:items-center">
 
  <div className="flex justify-center mb-2 md:mb-0">
    <img src={logo} alt="Rimac Logo" className="h-8 w-auto" />
  </div>

 
  <hr className="w-4/5 border-t border-[#2B304E] my-2 md:hidden" />

 
  <p className="text-sm text-gray-300 text-center mt-2 md:mt-0 md:text-left">
    © 2023 RIMAC Seguros y Reaseguros.
  </p>
</footer>
  );
}
