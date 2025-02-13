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
      description: "Notificaciones a correo corporativo.",
      image: "/correo.png",
    },
  ];

  const [desktopIndex, setDesktopIndex] = useState(0);

  const nextDesktop = () => {
    setDesktopIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevDesktop = () => {
    setDesktopIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextDesktop, 2000);
    return () => clearInterval(interval);
  }, []);

  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobile = () => {
    setMobileIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevMobile = () => {
    setMobileIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextMobile, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="componentes" className="py-16 bg-blue-100">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-800 uppercase mb-4">
          Funcionamiento
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden sm:block">
          <div className="flex overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform duration-500 ${
                  index === desktopIndex ? "scale-100" : "scale-90 opacity-70"
                }`}
              >
                <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[250px] h-[240px] mb-8 rounded-lg object-cover"
                  />
                  <h3 className="text-xl font-bold text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-black text-center mb-8">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevDesktop}
              className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
            >
              ❮
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextDesktop}
              className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
            >
              ❯
            </button>
          </div>
        </div>


        <div className="sm:hidden relative overflow-hidden w-full h-72">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col items-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 mb-4 rounded-lg object-cover border-2 border-gray-300"
                  />
                  <h3 className="text-xl font-bold text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-black text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevMobile}
            className="absolute inset-y-0 left-0 flex items-center
                    bg-blue-800 text-white px-2 py-1 text-sm leading-none 
                    rounded-full shadow-md
                    transform scale-75 hover:scale-60
                    z-5"
          >
            ❮
          </button>
          <button
            onClick={nextMobile}
            className="absolute inset-y-0 right-0 flex items-center
                    bg-blue-800 text-white px-2 py-1 text-sm leading-none 
                    rounded-full shadow-md
                    transform scale-75 hover:scale-60
                    z-5"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiciosCarrusel;
