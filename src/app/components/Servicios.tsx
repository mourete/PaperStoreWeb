"use client";

import { useState, useEffect } from "react";

const ServiciosCarrusel = () => {
  const services = [
    {
      title: "WEB",
      description: [
        "Fácil instalación y configuración personalizada",
        "Resguardo de documentos digitalizados, y cualquier otro archivo",
        "Envío de notificaciones y/o alertas.",
        "Reportes",
      ],
    },
    {
      title: "APP",
      description: ["Android / iOS", "Seguridad"],
    },
    {
      title: "Soporte Técnico",
      description: ["7x24"],
    },
    {
      title: "Infraestructura",
      description: ["Nube", "Standalone"],
    },
    {
      title: "Correo",
      description: ["Corporativo"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-800 uppercase mb-6">
          Servicios
        </h2>
      </div>
      <div className="max-w-6xl mx-auto flex items-center">

        <div className="w-1/2">
          <img
            src="/servicios.png"
            alt="Servicios"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-1/2 px-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              {services[currentIndex].title}
            </h3>
            <ul className="text-gray-700 text-left">
              {services[currentIndex].description.map((item, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="bg-blue-800 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
            >
              ❮ Anterior
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-800 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
            >
              Siguiente ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosCarrusel;
