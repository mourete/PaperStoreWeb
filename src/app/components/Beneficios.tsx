import Image from "next/image";

const Beneficios = () => {
  const services = [
    {
      title: "PRECISIÓN EN LA RECOLECCIÓN DE DATOS",
      description:
        "Configuración para la estructura operativa del levantamiento de información a través de instrumentos diseñados y controlados por asignación, recolección, consistencia para maximizar la veracidad de los datos.",
      image: "/recoleccion.png",
    },
    {
      title: "FLEXIBLE, SENCILLA Y EFICIENTE",
      description:
        "Configurables para una carga de datos sencilla desde un dispositivo móvil y asegurando la calidad de los datos y su resguardo. Capacidad para evolucionar y adaptarse a los cambios y requerimientos futuros.",
      image: "/eficiente.png",
    },
    {
      title: "ANÁLISIS AVANZADO",
      description:
        "Resumen y análisis del avance o estado de la captura de información para la toma de decisiones oportunas basadas en la realidad. Análisis de los resultados dimensional.",
      image: "/analisis_avanzado.png",
    },
    {
      title: "COLABORACIÓN",
      description:
        "Facilita el trabajo y comunicación con la conformación de equipos validados combinando control en la cantidad, vigencia y calidad de la data. Contribuye a minimizar los tiempos de recolección de datos.",
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
        "Con capacidad ilimitada en la planificación de levantamiento de información.",
      image: "/ilimitado.png",
    },
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-800 uppercase">
          Nuestros Beneficios
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {service.title}
            </h3>
            <p className="text-black text-sm text-justify">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
