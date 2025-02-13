"use client";

const Clientes = () => {
  const cases = [
    {
      title: "1. Configuración Personalizada:",
      description: [
        "Evaluamos las necesidades específicas de tu empresa para ofrecerte una solución adaptada y personalizada.",
      ],
      icon: "/configuracion.png",
    },
    {
      title: "2. Registro de Información:",
      description: [
        "Los equipos de trabajo colaboran con la información que se organiza y centraliza.",
      ],
      icon: "/informacion.png",
    },
    {
      title: "3. Monitoreo, Alertas y Resultados:",
      description: [
        "Paperstore te permite monitorear los datos registrados y al configurar alertas automáticas genera resultados detallados para el control y tomas de decisiones.",
      ],
      icon: "/monitoreo.png",
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 uppercase">
          ¿CÓMO FUNCIONA?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-6">
        {cases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center transition-transform hover:translate-y-2 hover:shadow-lg" // Añadido efecto hover y sombras
          >
            <div className="w-48 h-48 sm:w-40 sm:h-40 rounded-lg overflow-hidden mb-4">
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