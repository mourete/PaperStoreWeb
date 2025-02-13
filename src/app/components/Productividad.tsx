"use client";

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="desafio" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <span className="block w-16 h-[1px] bg-lime-300"></span>
          <h2 className="mx-3 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 uppercase">
            DESAFÍO
          </h2>
          <span className="block w-16 h-[1px] bg-lime-300"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8 flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/equipo.png"
            alt="Quiénes somos"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2">
          <p className="text-base sm:text-sm leading-relaxed text-justify text-black mb-4">
            Las empresas hoy en día enfrentan desafíos comunes que impactan su eficiencia y rentabilidad:
          </p>
          <div>
            <div className="flex items-start mb-2">
              <span className="text-green-600 mr-2 mt-1 flex-shrink-0">✔</span>
              <p className="text-base sm:text-sm leading-relaxed text-black">
                Datos Dispersos y Desactualizados: La información se encuentra fragmentada en múltiples fuentes, lo que genera retrasos y decisiones basadas en datos incompletos.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <span className="text-green-600 mr-2 mt-1 flex-shrink-0">✔</span>
              <p className="text-base sm:text-sm leading-relaxed text-black">
                Errores Humanos y Procesos Manuales: La dependencia de métodos manuales propicia errores en la gestión de información, afectando la calidad de los reportes y aumentando los costos.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <span className="text-green-600 mr-2 mt-1 flex-shrink-0">✔</span> 
              <p className="text-base sm:text-sm leading-relaxed text-black">
                Falta de Colaboración y Acceso Inmediato: Los equipos trabajan aislados y sin acceso en tiempo real a datos críticos, lo que dificulta la coordinación y la toma de decisiones estratégicas.
              </p>
            </div>
            <p className="text-base sm:text-sm leading-relaxed text-justify text-black mt-8">
              Paperstore combate estos problemas al integrar todos tus datos en una única plataforma inteligente, permitiendo una visión unificada y confiable de la información esencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;