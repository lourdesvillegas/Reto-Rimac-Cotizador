import React, { useState } from "react";
import Header from "../components/Header";
import { FaArrowLeft,  FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import icon1 from "../assets/icono1.png";
import icon2 from "../assets/icono2.png";
import icon3 from "../assets/icono3.png";
import icon4 from "../assets/icono4.png";

export default function Cotizacion() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const planesMi = [
    {
      nombre: "Plan en Casa",
      icono: (
        <img
          src={icon3}
          alt="Icono Plan en Casa"
          className="w-8 h-8 object-contain"
        />
      ),
      costo: "$45 al mes",
      beneficios: [
        "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
        "Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.",
        "Atención prioritaria 24/7.",
      ],
    },
    {
      
      nombre: "Plan en Casa y Clínica",
      icono: (
        <img
          src={icon4}
          alt="Icono Plan en Casa"
          className="w-8 h-8 object-contain"
        />
      ),
      costo: "$99 al mes",
      beneficios: [
        "Consultas en clínica para cualquier especialidad.",
        "Medicinas y exámenes derivados cubiertos al 80%.",
        "Atención presencial o virtual.",
      ],
    },
    {
      nombre: "Plan en Casa + Chequeo",
      icono: (
        <img
          src={icon3}
          alt="Icono Plan en Casa"
          className="w-8 h-8 object-contain"
        />
      ),
      costo: "$49 al mes",
      beneficios: [
        "Chequeo médico preventivo anual incluido.",
        "Medicina general a domicilio y por videollamada.",
        "Cobertura de medicinas al 100%.",
      ],
    },
  ];

  const planesOtro = [
    {
      nombre: "Plan Casa 2",

      icono: (
        <img
          src={icon3}
          alt="Icono Plan en Casa"
          className="w-8 h-8 object-contain"
        />
      ),
      costo: "$45 al mes",
      beneficios: [
        "Atención médica en casa.",
        "Cobertura de medicinas al 100%.",
        "Asistencia 24 horas.",
      ],
    },
    {
      nombre: "Plan en Casa y Hospital",
      icono: (
        <img
          src={icon4}
          alt="Icono Plan en Casa"
          className="w-8 h-8 object-contain"
        />
      ),
      costo: "$120 al mes",
      beneficios: [
        "Cobertura hospitalaria completa.",
        "Medicinas cubiertas al 90%.",
        "Consultas presenciales sin copago.",
      ],
    },
    {
      nombre: "Plan en Casa + Chequeo adicional",
      icono: (
        <img
          src={icon3}
          alt="Icono Plan en Casa"
          className="w-8 h-8 object-contain"
        />
      ),
      costo: "$60 al mes",
      beneficios: [
        "Chequeo médico preventivo y adicional.",
        "Videoconsultas médicas ilimitadas.",
        "Cobertura en exámenes de laboratorio.",
      ],
    },
  ];

  const planes = selectedPerson === "mi" ? planesMi : planesOtro;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % planes.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + planes.length) % planes.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full">
        <Header />
      </div>

      {/* Tabs */}
      <div className="flex justify-center w-full mt-8 mb-8 space-x-10 bg-[#EDEFFC] py-4">
        {["Planes y coberturas", "Resumen"].map((label, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setActiveTab(index + 1)}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${activeTab === index + 1
                  ? "bg-[#4F4FFF] text-white"
                  : "border-2 border-[#7981B2] text-[#7981B2]"
                }`}
            >
              {index + 1}
            </div>
            <span
              className={`text-sm md:text-base font-medium ${activeTab === index + 1 ? "text-[#4F4FFF]" : "text-[#7981B2]"
                }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* TAB 1 */}
      {activeTab === 1 && (
        <>
          {/* Volver */}
          <div className="w-full max-w-4xl px-6">
            <div className="flex justify-start">
              <div className="flex items-center mb-6 cursor-pointer text-[#4F4FFF]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4F4FFF] mr-3">
                  <FaArrowLeft size={16} />
                </div>
                <span className="font-medium text-[#4F4FFF]">Volver</span>
              </div>
            </div>
          </div>

          {/* Título */}
          <div className="text-center mb-10 mt-10 px-4">
            <h2 className="text-3xl font-bold mb-2">¿Para quién deseas cotizar?</h2>
            <p className="text-gray-600">Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>

          {/* Cards */}
          <div className="w-full flex flex-col items-center px-6">
            <div className="w-full max-w-3xl flex flex-col md:flex-row justify-center gap-6">
              {[{ id: "mi", icon: icon1, title: "Para mí", desc: "Cotiza tu seguro de salud y agrega familiares si así lo deseas." },
              { id: "otro", icon: icon2, title: "Para alguien más", desc: "Realiza una cotización para un familiar o cualquier persona." },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl p-6 relative flex-1 cursor-pointer border transition shadow-md ${selectedPerson === item.id ? "border-[#4F4FFF]" : "border-gray-300"
                    }`}
                  onClick={() => { setSelectedPerson(item.id); setCurrentSlide(0); }}
                >
                  <input
                    type="radio"
                    name="person"
                    checked={selectedPerson === item.id}
                    readOnly
                    className="absolute top-4 right-4 w-5 h-5 accent-[#4F4FFF]"
                  />
                  <div className="flex justify-start mb-4">
                    <img src={item.icon} alt={item.title} className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-left">{item.title}</h3>
                  <p className="text-gray-600 text-sm text-left">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Slider de Planes */}
            {selectedPerson && (
              <div className="w-full max-w-4xl mb-10 mt-10 relative overflow-hidden">

                <div className="md:grid md:grid-cols-3 gap-6 hidden">
                  {planes.map((plan, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col border border-gray-200"
                    >
                      
                      

                      
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-lg">{plan.nombre}</h4>
                        {plan.icono}
                      </div>

                      <p className="text-gray-600 text-xs font-medium uppercase">Costo del plan</p>
                      <p className="text-2xl font-bold mb-4">{plan.costo}</p>

                     
                      <div className="border-t border-[#D7DBF5] my-4"></div>

                    
                      <ul className="space-y-2 mb-6 flex-1">
                        {plan.beneficios.map((b, j) => (
                          <li key={j} className="text-sm text-gray-700 flex items-start">
                            <span className="text-[#4F4FFF] mr-2">•</span> {b}
                          </li>
                        ))}
                      </ul>

                   
                      <button className="mt-auto w-full bg-[#FF1C44] text-white font-semibold py-2 rounded-full hover:bg-[#e0153a] transition">
                        Seleccionar
                      </button>
                    </div>
                  ))}
                </div>

                {/* Slider móvil con animación */}

                <div className="md:hidden relative w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-lg">{planes[currentSlide].nombre}</h4>
                        {planes[currentSlide].icono}
                      </div>
                      <p className="text-gray-600 text-sm">Costo del plan</p>
                      <p className="text-2xl font-bold mb-4">{planes[currentSlide].costo}</p>
                      <div className="border-t border-[#D7DBF5] my-4"></div>
                      <ul className="space-y-2 mb-6">
                        {planes[currentSlide].beneficios.map((b, j) => (
                          <li key={j} className="text-sm text-gray-700 flex items-start">
                            <span className="text-[#4F4FFF] mr-2">•</span> {b}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-[#FF1C44] text-white font-semibold py-2 rounded-full hover:bg-[#e0153a] transition">
                        Seleccionar
                      </button>
                    </motion.div>
                  </AnimatePresence>


                  <div className="flex justify-center items-center mt-6 space-x-6">
                    <button
                      onClick={handlePrev}
                      disabled={currentSlide === 0}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${currentSlide === 0
                          ? "border-[#A9AFD9] text-[#A9AFD9] cursor-not-allowed"
                          : "border-[#4F4FFF] text-[#4F4FFF] hover:bg-[#EDEFFC]"
                        }`}
                    >
                      <FaChevronLeft />
                    </button>
                    <span className="text-sm text-gray-700 font-medium">
                      {currentSlide + 1} / {planes.length}
                    </span>

                    <button
                      onClick={handleNext}
                      disabled={currentSlide === planes.length - 1}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${currentSlide === planes.length - 1
                          ? "border-[#A9AFD9] text-[#A9AFD9] cursor-not-allowed"
                          : "border-[#4F4FFF] text-[#4F4FFF] hover:bg-[#EDEFFC]"
                        }`}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
        </>
      )}
      {/* Tab 2 - Resumen */}
      {activeTab === 2 && (
        <div className="w-full max-w-4xl">
          {/* Botón Volver */}
          <div className="w-full max-w-4xl px-0">
            <div className="flex justify-start">
              <div className="flex items-center mb-6 cursor-pointer text-[#4F4FFF]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4F4FFF] mr-3">
                  <FaArrowLeft size={16} /> </div>
                <span className="font-medium text-[#4F4FFF]">Volver</span>
              </div>
            </div>
          </div>
          <div className=" text-left">
            <h2 className="text-2xl font-bold mb-4">Resumen del seguro </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl text-left mt-8">
            <p className="text-gray-600">Precios calculados para:</p>
            <h3 className="text-xl font-bold mb-4">Rocio Miranda Díaz</h3>
            <hr></hr> 
            <p className="font-bold">Responsable de pago</p> 
            <p>DNI: 444888888</p>
            <p>Celular: 5130216147</p>
            <h4 className="font-bold">Plan elegido</h4>
            <p>Plan en Casa y Clínica</p>
            <p>Costo del Plan: $99 al mes</p>
          </div>
        </div>
      )}
    </div>
  );
}