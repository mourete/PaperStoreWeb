"use client";

import React, { useState } from "react";

const Beneficios = () => {
  const services = [
    {
      title: "AHORRO DE COSTOS Y TIEMPO",
      description:
        "Automatiza tareas repetitivas, elimina la gestión manual de datos y archivos. Optimiza procesos, obtén evidencias y minimiza errores para una significativa disminución de los costos operativos y un ahorro valioso en tiempo.",
      image: "/recoleccion.png",
    },
    {
      title: "MEJORA EN LA COLABORACIÓN",
      description:
        "Con una interfaz ágil y de fácil acceso, Paperstore facilita la comunicación y trabajo colaborativo de las áreas. Todos los equipos pueden acceder a la misma fuente de información lo que mejora la coordinación, minimiza los tiempos de recolección de datos y acelera la toma de decisiones.",
      image: "/eficiente.png",
    },
    {
      title: "PRECISIÓN EN LA RECOLECCIÓN DE DATOS, MAYOR FIABILIDAD",
      description:
        "Al consolidar datos de diversas fuentes o áreas en Paperstore, se reducen las discrepancias o errores en la gestión de información dispersa: alertas automáticas, análisis de los instrumentos diseñados y control de asignaciones para recolección de datos consistentes y precisos.",
      image: "/analisis_avanzado.png",
    },
    {
      title: "SENCILLA, FLEXIBLE Y EFICIENTE",
      description:
        "Diseño sencillo y configurable para su empresa, área o proceso, con acceso hasta desde un dispositivo móvil, Paperstore cuenta con  la capacidad para evolucionar y adaptarse a los cambios y requerimientos nuevos.",
      image: "/colaboracion.png",
    },
    {
      title: "ACCESO DONDE QUIERAS Y CUANDO QUIERAS",
      description:
        "Paperstore asegura que la información esté siempre disponible y accesible para quienes la necesiten, sin importar la ubicación geográfica registra datos offline u online en cualquier campo de trabajo para control, seguimiento y toma de decisiones.",
      image: "/acceso.png",
    },
    {
      title: "DECISIONES ESTRATÉGICAS BASADAS EN DATOS REALES",
      description:
        "Con reportes precisos y análisis de datos en cualquier momento, la dirección de tu empresa podrá basar sus decisiones en datos fiables, concretos y actuales, impulsando el crecimiento y la competitividad del negocio.",
      image: "/ilimitado.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextGroup = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 3, services.length - 3)
    );
  };

  const prevGroup = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const visibleServices = services.slice(startIndex, startIndex + 3);

  return (
    <section id="beneficios" className="py-10 sm:py-16 bg-gray-50">
  
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <div className="flex items-center justify-center">
          <span className="block w-72 h-[3px] bg-lime-300"></span>
          <h2 className="mx-3 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 uppercase">
            BENEFICIOS
          </h2>
          <span className="block w-72 h-[3px] bg-lime-300"></span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 hidden lg:block">
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 scrollbar-hide justify-center">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 w-80 flex-shrink-0"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-black text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>

   
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevGroup}
            disabled={startIndex === 0}
            className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ❮
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextGroup}
            disabled={startIndex >= services.length - 3}
            className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ❯
          </button>
        </div>
      </div>


      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 text-center flex flex-col items-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain"
            />
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-black text-justify">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
