'use client';
import { usePathname } from "next/navigation";
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
import NavbarContrato from "./Components-Contrato/Navbar_Contrato";
import ImagenContrato from "./Components-Contrato/Inicio_imagen_Contrato";
import QuienesContrato from "./Components-Contrato/Quienes_Contrato"
import ProductividadContrato from "./Components-Contrato/Productividad_Contrato";
import ServiciosContrato from "./Components-Contrato/Servicios_Contrato"
import BeneficiosContrato from "./Components-Contrato/Beneficios_Contrato"
import FooterContrato from "./Components-Contrato/Footer_Contrato";
import ContactoContrato from "./Components-Contrato/Contacto_Contrato";
import WhatsAppButtonContrato from "./Components-Contrato/Whatsapp_Contrato";
import ClientesContrato from "./Components-Contrato/Clientes_Contrato";
import SectoresContrato from "./Components-Contrato/Sectores_Contrato";
import ComponentesContrato from './Components-Contrato/Componentes_Contrato';


const Normal = () => {
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

const Contrato = () => {
  return (
    <div>
      <NavbarContrato/>
      <ImagenContrato/>
      <QuienesContrato/>  
      <ProductividadContrato/>
      <BeneficiosContrato/>
      <ClientesContrato/> 
      <ServiciosContrato/>      
      <SectoresContrato/>
      <ComponentesContrato/>
      <ContactoContrato/>
      <FooterContrato/>
      <WhatsAppButtonContrato/>
    </div>
  )
}

export default function Home() {
  const pathname = usePathname();

  const isContrato = pathname === '/contrato';

  return (
    <>
      {isContrato ? (<Contrato />) : (<Normal />)}
    </>   
  );
}