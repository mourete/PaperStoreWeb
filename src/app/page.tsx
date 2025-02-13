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
import Componentes from './components/Componentes';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Imagen/>
      <Quienes/>
      <Productividad/>
      
      <Beneficios/>
      <Clientes/>

      
      <Servicios/>      
      <Sectores/>
      <Componentes/>
      
      <Contacto/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}