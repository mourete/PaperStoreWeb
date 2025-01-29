import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiClock } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <HiLocationMarker className="mx-auto text-3xl" />
            <h3 className="mt-2 font-bold">Dirección</h3>
            <p className="mt-1">Monterrey, Nuevo León</p>
          </div>
          <div>
            <HiMail className="mx-auto text-3xl" />
            <h3 className="mt-2 font-bold">Email</h3>
            <p className="mt-1">contacto@softpath.com.mx</p>
          </div>
          <div>
            <HiClock className="mx-auto text-3xl" />
            <h3 className="mt-2 font-bold">Nuestro horario</h3>
            <p className="mt-1">Lunes a viernes 9:00 am a 6:00 pm</p>
            <p>Sábado de 9:00 am a 2:00 pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300" />

      <div className="py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-sm text-gray-600">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572738472398&sk=about"
              className="hover:text-blue-700"
            >
              <FaFacebookF size={20} />
            </a>
            {/* <a
              href="https://www.instagram.com/softpathoficial/"
              className="hover:text-blue-700"
            >
              <FaInstagram size={20} />
            </a> */}
            <a
              href="https://api.whatsapp.com/send/?phone=528132691277&text&type=phone_number&app_absent=0"
              className="hover:text-blue-700"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=contacto@softpath.com.mx"
              className="hover:text-blue-700"
            >
              <FaGoogle size={20} />
            </a>
          </div>
          <p className="text-center">Copyright © 2025 Paperstore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
