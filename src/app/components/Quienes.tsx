"use client";

const AboutUs: React.FC = () => {
  return (
    <section id="quienes" className="py-10 sm:py-16 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <span className="block w-16 h-[1px] bg-lime-300"></span>
          <h2 className="mx-3 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 uppercase">
            QUIENES SOMOS
          </h2>
          <span className="block w-16 h-[1px] bg-lime-300"></span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 mt-8">
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-justify font-bold text-black">
          Somos un equipo de profesionales dedicados a impulsar el crecimiento de nuestros clientes.  
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify font-bold text-black">
          Utilizamos herramientas tecnológicas avanzadas para transformar datos en información estratégica que contribuye directamente a sus planes y objetivos.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/quienes.png"
            alt="Quiénes somos"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
