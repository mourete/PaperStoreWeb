const Inicio_imagen: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-between w-full h-[68vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/portada.png')"
      }}
    >
    </section>
  );
};

export default Inicio_imagen;
