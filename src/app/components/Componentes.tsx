"use client";

import React from "react";

const Componentes = () => {
  return (
    <>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 uppercase text-center">
                ¿Estás listo para Paperstore?
              </h2>
            </div>
        </div>


      <section
        id="conectaFuturo"
        className="hidden sm:block relative w-full h-40 bg-gradient-to-r from-blue-900 to-lime-500 bg-cover bg-center"
      >
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-4xl font-bold text-white uppercase leading-tight whitespace-nowrap">
              &quot;CONECTA TUS DATOS, CONSTRUYE TU FUTURO&quot;
            </h1>
          </div>
        </div>
      </section>


      <section
        id="conectaFuturoMobile"
        className="block sm:hidden relative w-full h-32 bg-gradient-to-r from-blue-900 to-lime-500 bg-cover bg-center"
      >
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 text-center">
            <h1 className="text-sm font-bold text-white uppercase leading-tight whitespace-normal">
              &quot;CONECTA TUS DATOS, CONSTRUYE TU FUTURO&quot;
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Componentes;
