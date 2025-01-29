const AboutUs: React.FC = () => {
    return (
      <section id="quienes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <span className="block w-20 h-[1px] bg-lime-300"></span>
            <h2 className="mx-4 text-4xl font-bold text-blue-800 uppercase">
              QUIENES SOMOS
            </h2>
            <span className="block w-20 h-[1px] bg-lime-300"></span>
          </div>
        </div>
  
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 mt-8">
          <div className="text-4xl">
            <p className="text-black text-lg leading-relaxed text-justify font-bold">
              Somos un equipo de profesionales que brinda soluciones innovadoras para el
              desarrollo y crecimiento de nuestros clientes.
            </p>
            <p className="mt-4 text-black text-lg leading-relaxed text-justify font-bold">
              Lo hacemos, por medio de herramientas tecnológicas avanzadas para recolección
              y procesamiento de información que contribuyan en sus planes y objetivos.
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
  