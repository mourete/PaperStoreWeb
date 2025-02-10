"use client";

import { useState, useEffect } from "react";

interface Service {
  title: string;
  description: string[];
  image: string;
}

const Sectores = () => {
  const services: Service[] = [
    {
      title: "SALUD",
      description: ["Infraestructura.", "Seguridad.", "Licencias.", "Uso adecuado de equipos médicos."],
      image: "/Hospital_Sectores.png",
    },
    {
      title: "INMOBILIARIO",
      description: ["Cumplimiento de Contratos y renovaciones.", "Servicios.", "Levantamiento de la calidad en la entrega de las casas habitaciones."],
      image: "/inmobiliaria.png",
    },
    {
      title: "EDUCACIÓN",
      description: ["Infraestructura.", "Alimentación.", "Mantenimiento de las aulas.", "Levantamiento de activos fijos."],
      image: "/educacion.png",
    },
    {
      title: "BANCA Y FINANZAS",
      description: ["Agencias.", "Productividad.", "Evaluación de Riesgo Crediticio", "Auditorias internas y externas" ],
      image: "/finanzas.png",
    },
    {
      title: "CONSUMO MASIVO",
      description: ["Sucursales.", "Experiencia del cliente en punto de venta.", "Gestión de inventario y stock en tiendas"],
      image: "/consumo.png",
    },
  ];

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

      <div className="max-w-5xl mx-auto relative">
        {/* Versión escritorio */}
        <div className="hidden sm:block">
          <div className="flex justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 px-2"
              >
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full min-h-[350px]">
                  <img
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

        {/* Versión móvil */}
        <MobileSlider services={services} />
      </div>
    </section>
  );
};

function MobileSlider({ services }: { services: Service[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:hidden overflow-hidden w-full h-[420px] relative">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {services.map((service, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center px-2">
            <div className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center text-center min-h-[350px]">
              <img
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

      {/* Flechas de navegación (más pequeñas y bien posicionadas) */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2
                   bg-blue-800 text-white px-3 py-2 text-xs leading-none 
                   rounded-full shadow-md hover:bg-blue-600
                   z-10"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2
                   bg-blue-800 text-white px-3 py-2 text-xs leading-none 
                   rounded-full shadow-md hover:bg-blue-600
                   z-10"
      >
        ❯
      </button>
    </div>
  );
}

export default Sectores;
