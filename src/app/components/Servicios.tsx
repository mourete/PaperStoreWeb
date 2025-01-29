"use client";

import { useState, useEffect } from "react";

const ServiciosCarrusel = () => {
  const services = [
    {
      title: "WEB",
      description: "Fácil instalación y configuración personalizada.",
      image: "/web.png",
    },
    {
      title: "APP",
      description: "Android / iOS.",
      image: "/app.png",
    },
    {
      title: "Soporte Técnico",
      description: "Atención 24/7.",
      image: "/soporte.png",
    },
    {
      title: "Infraestructura",
      description: "Nube y Standalone.",
      image: "/infraestructura.png",
    },
    {
      title: "Correo",
      description: "Correo corporativo eficiente.",
      image: "/correo.png",
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
    <section id="servicios" className="py-16 bg-blue-100">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-800 uppercase mb-6">
          Servicios
        </h2>
      </div>
      <div className="relative max-w-5xl mx-auto">

        <div className="flex overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform duration-500 ${
                index === currentIndex ? "scale-100" : "scale-90 opacity-70"
              }`}
            >
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-60">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-32 mb-4 rounded-lg object-cover border-2 border-gray-300"
                />
                <h3 className="text-xl font-bold text-blue-800">
                  {service.title}
                </h3>
                <p className="text-black text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600"
          >
            ❮
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiciosCarrusel;
