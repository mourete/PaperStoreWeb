"use client";

const Clientes = () => {
  const cases = [
    {
      title: "Hospitales y Laboratorios",
      description: [
        "Optimizaron la gestión de licencias, permisos, inventarios y cumplimiento normativo en las diferentes sedes, reduciendo riesgos y sanciones.",
      ],
      icon: "/conformidad.jpg",
    },
    {
      title: "Inmobiliarias",
      description: [
        "Centralizaron la información de propiedades y sus contratos, para una oportuna gestión de vigencia del contrato y su cumplimiento, minimizando el riesgo de penalidades o perdida de contratos.",
      ],
      icon: "/inmobiliaria.jpg",
    },
    {
      title: "Centros Comerciales",
      description: [
        "Supervisa el cumplimiento de los comercios y sus contratos de arriendo notificaciones normativas, mejorando la eficiencia operativa y oportuna gestión de cobranza.",
      ],
      icon: "/contratos.jpg",
    },
  ];

  return (
    <section id="implementacion" className="py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 uppercase">
          ¿Quiénes se han beneficiado de Paperstore?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-6">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center transition-transform hover:translate-y-2 hover:shadow-lg" // Añadido efecto hover y sombras
          >
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-lg overflow-hidden mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
              {item.title}
            </h3>
            <ul className="text-left text-sm sm:text-base text-black text-justify">
              {item.description.map((desc, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientes;