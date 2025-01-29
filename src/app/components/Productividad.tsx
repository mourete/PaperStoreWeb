import Image from "next/image";

const Productividad = () => {
    const features = [
      {
        title: "Flujos de trabajo e Integración",
        image: "/flujo.png",
      },
      {
        title: "Productividad",
        image: "/productividad.png",
      },
      {
        title: "Levantamiento de Información",
        image: "/levantamiento.png",
      },
      {
        title: "Análisis de la Información",
        image: "/analisis.png",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="flex justify-center gap-8 flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-b from-blue-500 to-lime-500 shadow-lg text-white hover:scale-105 transition duration-300"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 mb-2 object-contain"
              />
              <h3 className="text-center text-sm font-bold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Productividad;
  