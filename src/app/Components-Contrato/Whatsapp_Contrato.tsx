import { FaWhatsapp } from "react-icons/fa";
import Settings from "../settings";

const WhatsAppButton = () => {
  return (
    <a
      href={Settings.whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
