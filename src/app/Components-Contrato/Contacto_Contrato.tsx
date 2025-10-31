import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Settings from "../settings";

const Contacto: React.FC = () => {
  return (
    <section id="contacto" className="py-12 bg-white text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/contacto.png"  
            className="w-full h-auto rounded-lg shadow-md"
            alt=""
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mt-4 text-black text-center">¡Contacta con Nosotros!</h2>
          <form className="space-y-4 mt-6">
                <a
                  href={Settings.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  Whatsapp
                </a>
                <a
                  href={Settings.correoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  <FaGoogle size={20} className="mr-2" />
                  Correo
                </a>
                <a
                  href={Settings.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-950"
                >
                  <FaFacebookF size={20} className="mr-2" />
                  Facebook
                </a>
                <a
                  href={Settings.instagramLink}
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
