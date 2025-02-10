"use client";

const Beneficios = () => {
  const services = [
    {
      title: "PRECISIÓN EN LA RECOLECCIÓN DE DATOS",
      description:
        "Aseguramos la veracidad de los datos a través de una estructura operativa configurable y controlada.  Nuestros instrumentos, diseñados con precisión, garantizan asignación, recolección y consistencia.",
      image: "/recoleccion.png",
    },
    {
      title: "FLEXIBLE, SENCILLA Y EFICIENTE",
      description:
        "Carga de datos móvil sencilla y segura. Flexibilidad para adaptarse a tus necesidades presentes y futuras.",
      image: "/eficiente.png",
    },
    {
      title: "ANÁLISIS AVANZADO",
      description:
        "Resumen en tiempo real del avance, análisis dimensional profundo y base sólida para decisiones oportunas y basadas en la realidad.",
      image: "/analisis_avanzado.png",
    },
    {
      title: "COLABORACIÓN",
      description:
        "Trabajo en equipo optimizado: Comunicación ágil, datos validados y recolección más rápida.",
      image: "/colaboracion.png",
    },
    {
      title: "ACCESO DONDE QUIERAS Y CUANDO QUIERAS",
      description:
        "Disponible para web y app. Recolecta datos offline y online en cualquier campo de trabajo.",
      image: "/acceso.png",
    },
    {
      title: "USO ILIMITADO",
      description:
        "Capacidad ilimitada para planificar y gestionar el levantamiento de información.",
      image: "/ilimitado.png",
    },
  ];

  return (
    <section id="beneficios" className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 uppercase">
          Nuestros Beneficios
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
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
