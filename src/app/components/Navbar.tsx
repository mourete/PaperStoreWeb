"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-md z-50">
      <div className="relative h-12 w-8 ml-20">
        <img src="/logo.png" alt="SoftPath" className="h-12 max-w-md" />
      </div>
      <ul className="flex space-x-4 text-sm mr-20">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-blue-800 font-sans" : "text-black"
            } hover:text-blue-600`}
          >
            INICIO
          </Link>
        </li>
        <li>
          <Link
            href="/quienes"
            className={`${
              pathname === "/" ? "text-blue-800 font-sans" : "text-black"
            } hover:text-blue-600`}
          >
            QUIENES SOMOS
          </Link>
        </li>
        <li>
          <Link
            href="/servicios"
            className={`${
              pathname === "/servicios"
                ? "text-blue-800 font-sans"
                : "text-black font-sans"
            } hover:text-blue-600`}
          >
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className={`${
              pathname === "/contacto"
                ? "text-blue-800 font-sans"
                : "text-black font-sans"
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
