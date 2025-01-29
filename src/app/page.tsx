import Navbar from "./components/Navbar";
import Imagen from "./components/Inicio_imagen";
import Quienes from "./components/Quienes"
import Productividad from "./components/Productividad";
import Servicios from "./components/Servicios"
import Beneficios from "./components/Beneficios"
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import WhatsAppButton from "./components/Whatsapp";
import Clientes from "./components/Clientes";
import Sectores from "./components/Sectores";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Imagen/>
      <Quienes/>
      <Productividad/>
      <Servicios/>
      <Beneficios/>
      <Clientes/>
      <Sectores/>
      <Contacto/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}