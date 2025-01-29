const Clientes = () => {
    const cases = [
      {
        title: "Hospitales / Laboratorios",
        description: [
          "Control Renovaciones Marcas/Licencias.",
          "Cumplimiento de Seguridad de la información puestos de trabajo.",
        ],
        icon: "/hospital.png",
      },
      {
        title: "Inmobiliaria",
        description: [
          "Gestión de contratos y alertas.",
          "Digitalización masiva de contratos y Caracterización.",
        ],
        icon: "/inmobiliaria.png",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-5xl font-bold text-blue-800 uppercase">Casos de Éxito</h2>
          <p className="text-lg text-blue-700 mt-2">
            <span className="font-bold text-blue-900">Paperstore</span> es usado en todos los sectores de la industria. Algunos casos de éxito:
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="w-29 h-32 rounded-lg overflow-hidden mb-4 border-4 border-lime-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {item.title}
              </h3>
              <ul className="text-blue-700 text-left">
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
  