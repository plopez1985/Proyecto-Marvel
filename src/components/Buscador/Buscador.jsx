import React, { useState } from "react";
import Boton from "../Boton/Boton.jsx";
import Input from "../Input/Input.jsx";

export function Buscador({ onBuscar }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (nuevoValor) => {
    setInputValue(nuevoValor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onBuscar(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <Input
        name="busqueda"
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar nombre del heroe o villano..."
        clase="w-full sm:w-80 px-4 py-2 border border-gray-400 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500"
      />
      <Boton 
        text="Buscar" 
        type="submit"
        clase="w-full sm:w-auto bg-red-600 hover:bg-red-900 text-white px-4 py-2 text-base rounded-md"
      />
    </form>
  );
}
