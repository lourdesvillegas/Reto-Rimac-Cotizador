import React from "react";
import { Phone } from "lucide-react"; 
import logo from "../assets/logo-rimac.png";



const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-transparent">
      
      <div className="flex items-center">
         <img src={logo} alt="Rimac Logo" className="h-8" />
      </div>

      
      <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
        <span className="hidden sm:inline">¡Compra por este medio!</span>
        <Phone className="w-4 h-4 text-black" />
        <span className="font-bold text-black text-lg">(01) 411 6001</span>
      </div>
    </header>
  );
};

export default Header;
