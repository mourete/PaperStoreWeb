"use client";

const Beneficios = () => {
  const services = [
    {
      title: "AHORRO DE COSTOS Y TIEMPO",
      description:
        "Automatiza tareas repetitivas y elimina la gestión manual de datos. Al centralizar la información se generan las evidencias sobre la información registrada y se reducen los errores y se optimizan los procesos, lo que se traduce en una significativa disminución de los costos operativos y un ahorro valioso en tiempo.",
      image: "/recoleccion.png",
    },
    {
      title: "MEJORA EN LA COLABORACIÓN",
      description:
        "Con una interfaz intuitiva y de fácil acceso, Paperstore facilita la comunicación y el trabajo colaborativo entre departamentos. Todos los equipos pueden acceder a la misma fuente de información en tiempo real, lo que mejora la coordinación, minimiza los tiempos de recolección de datos. y acelera la toma de decisiones.",
      image: "/eficiente.png",
    },
    {
      title: "PRECISIÓN EN LA RECOLECCIÓN DE DATOS, MAYOR FIABILIDAD",
      description:
        "Al consolidar datos de diversas fuentes o áreas en un solo sistema, se reducen las discrepancias y los errores comunes en la gestión de información dispersa. Las alertas automáticas y los análisis detallados garantizan que los datos sean precisos a través de instrumentos diseñados y controlados por asignación, recolección y consistencia para maximizar la veracidad de los datos.",
      image: "/analisis_avanzado.png",
    },
    {
      title: "SENCILLA, FLEXIBLE Y EFICIENTE",
      description:
        "Diseño sencillo y configurable para su empresa, área o proceso, con acceso hasta desde un dispositivo móvil y con la capacidad para evolucionar y adaptarse a los cambios y requerimientos nuevos.",
      image: "/colaboracion.png",
    },
    {
      title: "ACCESO DONDE QUIERAS Y CUANDO QUIERAS",
      description:
        "Paperstore asegura que la información esté siempre disponible y accesible para quienes la necesiten, y sin importar dónde se encuentren registra datos offline y online en cualquier campo de trabajo. Esto es fundamental para mantener el control, el seguimiento y la toma de decisiones estratégicas oportunamente.",
      image: "/acceso.png",
    },
    {
      title: "DECISIONES ESTRATÉGICAS BASADAS EN DATOS REALES",
      description:
        "Con reportes precisos y análisis en tiempo real, la dirección de tu empresa podrá basar sus decisiones en datos concretos y actuales, impulsando el crecimiento y la competitividad del negocio.",
      image: "/ilimitado.png",
    },
  ];

  return (
    <section id="beneficios" className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 uppercase">
          Beneficios
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
