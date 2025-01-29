"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = [
      { id: "inicio", offsetTop: document.getElementById("inicio")?.offsetTop },
      { id: "quienes", offsetTop: document.getElementById("quienes")?.offsetTop },
      { id: "servicios", offsetTop: document.getElementById("servicios")?.offsetTop },
      { id: "beneficios", offsetTop: document.getElementById("beneficios")?.offsetTop },
      { id: "sectores", offsetTop: document.getElementById("sectores")?.offsetTop },
      { id: "contacto", offsetTop: document.getElementById("contacto")?.offsetTop },
    ];

    const scrollPosition = window.scrollY + 100; // Ajuste para considerar el desplazamiento
    const currentSection = sections
      .filter((section) => section.offsetTop !== undefined)
      .reverse()
      .find((section) => scrollPosition >= (section.offsetTop ?? 0));

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 bg-white shadow-md z-50">
      <div className="relative h-12 w-8 ml-20">
        <img src="/logo.png" alt="SoftPath" className="h-12 max-w-md" />
      </div>
      <ul className="flex space-x-4 text-sm mr-20">
        <li>
          <Link
            href="#inicio"
            className={`${
              activeSection === "inicio" ? "text-blue-800 font-bold" : "text-black"
            } hover:text-blue-600`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            href="#quienes"
            className={`${
              activeSection === "quienes" ? "text-blue-800 font-bold" : "text-black"
            } hover:text-blue-600`}
          >
            QUIENES SOMOS
          </Link>
        </li>
        <li>
          <Link
            href="#servicios"
            className={`${
              activeSection === "servicios" ? "text-blue-800 font-bold" : "text-black"
            } hover:text-blue-600`}
          >
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link
            href="#beneficios"
            className={`${
              activeSection === "beneficios" ? "text-blue-800 font-bold" : "text-black"
            } hover:text-blue-600`}
          >
            BENEFICIOS
          </Link>
        </li>
        <li>
          <Link
            href="#sectores"
            className={`${
              activeSection === "sectores" ? "text-blue-800 font-bold" : "text-black"
            } hover:text-blue-600`}
          >
            SECTORES
          </Link>
        </li>
        <li>
          <Link
            href="#contacto"
            className={`${
              activeSection === "contacto" ? "text-blue-800 font-bold" : "text-black"
            } hover:text-blue-600`}
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
