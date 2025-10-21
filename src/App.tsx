import React from "react";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import familyImg from "./assets/familia.png";

export default function App() {
  return (
    // Contenedor principal en columna que ocupa toda la pantalla
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-white to-cyan-100">
      
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow flex justify-center items-center px-8">
        <div className="max-w-6xl w-full bg-transparent overflow-hidden">

          {/* Contenedor del título + imagen en móviles */}
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] text-black shadow-sm md:hidden">
                Seguro Salud Flexible
              </span>
            </div>

          <div className="flex items-center mb-4 md:mb-10">
            
            <h1 className="text-3xl md:text-4xl font-bold mr-4 flex-1 md:hidden">
              Creado para ti y tu familia
            </h1>
            <img
              src={familyImg}
              alt="Familia feliz"
              className="w-16 h-16 rounded-2xl object-cover md:hidden"
            />
          </div>

          {/* Contenedor de escritorio: imagen grande + formulario */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Imagen */}
            <div className="flex justify-center items-center p-6">
              <img
                src={familyImg}
                alt="Familia feliz"
                className="rounded-2xl object-cover w-full max-w-md h-auto"
              />
            </div>

            {/* Texto + Formulario */}
            <div className="flex flex-col justify-center p-10 text-gray-800">
              <div className="mb-4">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] text-black shadow-sm">
                  Seguro Salud Flexible
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mr-4 flex-1 ">
                Creado para ti y tu familia
              </h1>
              <p className="text-lg mb-8 text-gray-600 font-medium">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
              </p>
              <LoginForm />
            </div>
          </div>

          {/* Contenido móvil: párrafo + formulario debajo del título */}
          <div className="md:hidden">
            <p className="text-lg mb-8 text-gray-600 font-medium">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>
            <LoginForm />
          </div>
        </div>
      </main>


      {/* FOOTER */}
      <Footer />
    </div>
  );
}

