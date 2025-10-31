"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const sections = [
      { id: "paperstore", offsetTop: document.getElementById("paperstore")?.offsetTop },
      { id: "desafio", offsetTop: document.getElementById("desafio")?.offsetTop },
      { id: "quienes", offsetTop: document.getElementById("quienes")?.offsetTop },
      { id: "beneficios", offsetTop: document.getElementById("beneficios")?.offsetTop },
      { id: "implementacion", offsetTop: document.getElementById("implementacion")?.offsetTop },
      { id: "componentes", offsetTop: document.getElementById("componentes")?.offsetTop },
      { id: "contacto", offsetTop: document.getElementById("contacto")?.offsetTop },
    ];

    const scrollPosition = window.scrollY + 100;
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "#paperstore", label: "PAPERSTORE CONTRATO" },
    { href: "#desafio", label: "DESAFÍO" },
    { href: "#beneficios", label: "BENEFICIOS" },
    { href: "#implementacion", label: "IMPLEMENTACIÓN" },
    { href: "#componentes", label: "COMPONENTES" },
    { href: "#contacto", label: "CONTACTO" },
  ];

  const renderLinks = (extraClasses: string = "") => (
    <>
      {menuItems.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`
              ${activeSection === href.replace("#", "") ? "text-blue-800 font-bold" : "text-black"}
              hover:text-blue-600
              ${extraClasses}
            `}
            onClick={() => setIsOpen(false)} 
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-18">
        <div className="flex items-center">
          <img src="/logo.png" alt="Spaperstore" className="h-20 w-auto" />
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-black hover:text-blue-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 text-xs">
          {renderLinks()}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          {renderLinks("block py-2")} 
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
