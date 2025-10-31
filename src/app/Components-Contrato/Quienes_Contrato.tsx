"use client";

const AboutUs: React.FC = () => {
  return (
    <section id="quienes" className="py-10 sm:py-16 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <span className="block w-72 h-[3px] bg-lime-300"></span>
          <h2 className="mx-3 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 uppercase">
            ¿Qué es Paperstore Contrato?
          </h2>
          <span className="block w-72 h-[3px] bg-lime-300"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 mt-8 bg-white p-6 rounded-lg shadow-lg transition-transform hover:translate-y-2 hover:shadow-lg">
        <div className="flex justify-center">
            <img
              src="/quienes.png"
              alt="Quiénes somos"
              className="w-[700px] h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-justify text-black">
          Paperstore es la solución integral diseñada para centralizar, organizar y analizar datos críticos  dinámicos de manera ágil y segura.  
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify text-black">
          Con Paperstore, tu empresa puede dejar atrás el caos de hojas de cálculo, archivos y sistemas aislados, garantizando que cada área disponga de información actualizada y confiable en todo momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
