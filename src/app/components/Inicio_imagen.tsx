"use client";

import { useState, useEffect } from "react";

const InicioImagen = () => {
  const images = [
    {
      url: "/portada.png",
      title:
        "FACILITA EL PROCESO GENERAL DE LEVANTAMIENTO DE DATOS PARA LA EVALUACIÓN DE GRAN ESCALA Y MULTIDIMENSIONAL PARA ORGANIZACIONES DINÁMICAS APOYO PARA LA PLANIFICACIÓN Y EVALUACIÓN DE LAS ACCIONES Y TOMAS DE DECISIONES.",
    },
    {
      url: "/portada2.png",
      title:
        "MONITOREO DE ESTADO DEL SERVICIO PRODUCTO, ÁREAS, SECTORES, PROCESO O DESEMPEÑO, SEGURIDAD, ENTRE OTROS.",
    },
    {
      url: "/portada3.png",
      title:
        "CREA DATOS ESTADISTICOS SECTORIALES Y CRUZALO CON OTRAS FUENTES DE INFORMACIÓN RELACIONADAS AL ÁREA O ÁMBITO.",
    },
    {
      url: "/portada4.png",
      title:
        "PAPERSTORE EMPODERA A LAS EMPRESAS OPTIMIZANDO SUS PROCESOS, AUMENTANDO SU PRODUCTIVIDAD Y ALCANZANDO SUS OBJETIVOS.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[85vh] overflow-hidden"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image.url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end">
            <div className="px-4 py-6 sm:px-8 sm:py-8 md:max-w-3xl md:mx-20 text-left">
              <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-white mb-2 sm:mb-4 leading-relaxed">
                {image.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-20 hover:bg-opacity-70"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-20 hover:bg-opacity-70"
      >
        ❯
      </button>
    </section>
  );
};

export default InicioImagen;
