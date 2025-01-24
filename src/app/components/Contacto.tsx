import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contacto: React.FC = () => {
  return (
    <section className="py-12 bg-blue-200 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/contacto.png"  
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mt-4 text-black text-center">¡Contacta con Nosotros!</h2>
          <form className="space-y-4 mt-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=528132691277&text=Hola%2C%20me%20gustaría%20más%20información."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  Whatsapp
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=contacto@softpath.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  <FaGoogle size={20} className="mr-2" />
                  Correo
                </a>
                <a
                  href="https://www.facebook.com/softpathoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-950"
                >
                  <FaFacebookF size={20} className="mr-2" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/softpathoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-pink-600 rounded bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                >
                  <FaInstagram size={20} className="mr-2" />
                  Instagram
                </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
