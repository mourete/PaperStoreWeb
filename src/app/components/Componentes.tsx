"use client";

import React from "react";

const Componentes = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 uppercase">
          ¿Estás listo para Paperstore?
        </h2>
      </div>
    <section id="conectaFuturo" className="relative w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url('/conecta.jpg')` }}>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/50">
        {/* Overlay negro semitransparente */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 text-center">
          {/* Contenedor para centrar el texto */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl font-bold text-white uppercase leading-tight whitespace-nowrap">
            {/* Texto agrandado y sin salto de línea */}
            "CONECTA TUS DATOS, CONSTRUYE TU FUTURO"
          </h1>
        </div>
      </div>
    </section>
    </>
  );
};

export default Componentes;