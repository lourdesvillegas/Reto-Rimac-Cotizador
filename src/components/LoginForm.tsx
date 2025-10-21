import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [tipoDoc, setTipoDoc] = useState("DNI");
  const [dni, setDni] = useState("");
  const [celular, setCelular] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  // Limpiar espacios y verificar solo números
  const dniClean = dni.trim();
  const celularClean = celular.trim();
  const onlyNumbers = /^\d+$/;

  if (!onlyNumbers.test(dniClean) || !onlyNumbers.test(celularClean)) {
    setError("Los campos deben contener solo números.");
    return;
  }

  try {
    const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
    const data = await response.json();

    
    if (data?.name && dniClean === "30216147" && celularClean === "5130216147") {
      navigate("/cotizacion");
    } else {
      setError("DNI o número de celular incorrecto.");
    }
  } catch (err) {
    setError("Error al validar tus datos. Intenta nuevamente.");
  }
};


  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <div className="mb-4">
        <div className="flex rounded-lg overflow-hidden border-2 border-gray-400 focus-within:border-[#5E6488] transition-all duration-300">
          <div className="flex w-full bg-transparent rounded-md overflow-hidden">
            <div className="flex items-center border-r-2 border-gray-400 ">
              <select
                className="bg-transparent px-4 py-5 text-sm outline-none border-none"
                value={tipoDoc}
                onChange={(e) => setTipoDoc(e.target.value)}
              >
                <option value="DNI">DNI</option>
                <option value="RUC">RUC</option>
              </select>
            </div>

            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
              className="flex-1 px-3 py-2 text-sm outline-none bg-transparent border-none "
              placeholder="Nro. de documento"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          required
          className="flex-1 px-3 py-5 w-full text-sm border-2  bg-transparent rounded-lg  border-gray-400 focus-within:border-[#5E6488] transition-all duration-300"
          placeholder="Celular"
        />
      </div>

      <div className="mb-4 text-sm">
        <label className="flex items-center mb-4">
          <input type="checkbox" required className="mr-2  w-4 h-4 border border-gray-400 rounded accent-black checked:bg-black checked:border-black" />
          <span>Acepto la Política de Privacidad</span>
        </label>
        <label className="flex items-center mt-1 mb-4">
          <input type="checkbox" required className="mr-2 w-4 h-4 border border-gray-400 rounded accent-black checked:bg-black checked:border-black" />
          <span>Acepto la Política de Comunicaciones Comerciales</span>
        </label>
        <a href="#" className="text-black-500 underline text-xs block mt-2">
          Aplican Términos y Condiciones.
        </a>
      </div>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto bg-black text-white rounded-full py-2 px-6 font-semibold hover:bg-gray-800 transition"
      >
        {loading ? "Verificando..." : "Cotiza aquí"}
      </button>
    </form>
  );
};

export default LoginForm;
