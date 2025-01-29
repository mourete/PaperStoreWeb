"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


const Sectores = () => {
  const services = [
    {
      title: "SALUD",
      description: ["Infraestructura.", "Seguridad.", "Licencias.", "Otros."],
      image: "/Hospital_Sectores.png",
    },
    {
      title: "INMOBILIARIO",
      description: ["Cumplimiento de Contratos y renovaciones.", "Servicios."],
      image: "/inmobiliaria.png",
    },
    {
      title: "EDUCACIÓN",
      description: ["Infraestructura.", "Alimentación.", "Otros."],
      image: "/educacion.png",
    },
    {
      title: "BANCA Y FINANZAS",
      description: ["Agencias.", "Productividad.", "Otros."],
      image: "/finanzas.png",
    },
    {
      title: "CONSUMO MASIVO",
      description: ["Sucursales.", "Otros."],
      image: "/consumo.png",
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
    <section id="sectores" className="py-16 bg-blue-100">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-800 uppercase mb-6">
          Sectores
        </h2>
        <p className="text-lg text-blue-700 mt-2">
          <span className="font-bold text-blue-900">Paperstore</span> es usado
          en todos los sectores de la industria.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Contenedor de los servicios */}
        <div className="flex overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-2"
            >
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full min-h-[350px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg border-2 border-gray-300"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  {service.title}
                </h3>
                <ul className="text-black text-left space-y-1">
                  {service.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✔</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>      
      </div>
    </section>
  );
};

export default Sectores;
