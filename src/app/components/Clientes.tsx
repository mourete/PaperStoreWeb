"use client";

const Clientes = () => {
  const cases = [
    {
      title: "Hospitales / Laboratorios",
      description: [
        "Control y renovación en marcas/licencias.",
        "Cumplimiento de seguridad en la información.",
      ],
      icon: "/hospital.png",
    },
    {
      title: "Inmobiliaria",
      description: [
        "Gestión de contratos y alertas.",
        "Digitalización masiva de contratos y caracterización.",
      ],
      icon: "/inmobiliaria.png",
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 uppercase">
          Casos de Éxito
        </h2>
        <p className="text-base sm:text-lg text-blue-700 mt-2">
          <span className="font-bold text-blue-900">Paperstore</span> es usado en todos
          los sectores de la industria. Algunos casos de éxito:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-6">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden mb-4 border-2 sm:border-4 border-lime-300">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
              {item.title}
            </h3>
            <ul className="text-left text-sm sm:text-base text-blue-700">
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
