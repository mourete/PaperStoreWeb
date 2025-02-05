"use client";

const Productividad = () => {
  const features = [
    { title: "Flujos de trabajo e Integración", image: "/flujo.png" },
    { title: "Productividad", image: "/productividad.png" },
    { title: "Levantamiento de Información", image: "/levantamiento.png" },
    { title: "Análisis de la Información", image: "/analisis.png" },
  ];

  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center
                w-32 h-32
                sm:w-36 sm:h-36
                md:w-40 md:h-40
                rounded-full
                bg-gradient-to-b from-blue-500 to-lime-500
                shadow-lg text-white
                hover:scale-105
                transition-transform
                duration-300
              "
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-2 object-contain"
              />
              <h3 className="text-center text-xs sm:text-sm md:text-base font-bold">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productividad;
