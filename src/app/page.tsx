import Navbar from "./components/Navbar";
import Imagen from "./components/Inicio_imagen";
import Quienes from "./components/Quienes"
import Productividad from "./components/Productividad";
import Servicios from "./components/Servicios"
import Beneficios from "./components/Beneficios"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Imagen/>
      <Quienes/>
      <Productividad/>
      <Servicios/>
      <Beneficios/>
    </div>
  )
}