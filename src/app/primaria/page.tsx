// src/app/primaria/page.tsx
"use client";

import Link from 'next/link';

export default function PrimariaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section con color en lugar de imagen */}
      <section className="bg-pink-600 h-80 flex items-center justify-center">
        <div className="text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Área Primaria
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Un espacio seguro y estimulante para el desarrollo de los más niños
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-800">
          Bienvenidos a nuestra Área Primaria
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
          En Instituto Piaget, creamos un entorno cálido y acogedor donde los niños de 1 a 3 años comienzan a descubrir el mundo a través del juego, la música y la interacción social.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">🧸</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Metodología Montessori</h3>
            <p className="text-gray-600">Aprendizaje auto-dirigido y adaptado al ritmo de cada niño</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-purple-600">🎵</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Estimulación Temprana</h3>
            <p className="text-gray-600">Actividades diseñadas para potenciar el desarrollo cognitivo y sensorial</p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-green-600">🍎</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Alimentación Balanceada</h3>
            <p className="text-gray-600">Menús nutritivos elaborados por especialistas en nutrición infantil</p>
          </div>
        </div>
      </section>

      {/* Programa */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-blue-800">
            Nuestro Programa Maternal
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-blue-700">Para niños de 1 a 2 años</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Desarrollo del lenguaje a través de canciones y cuentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Actividades motoras para fortalecer músculos y coordinación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Juegos de socialización y reconocimiento de emociones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Rutinas de descanso y alimentación supervisadas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-blue-700">Para niños de 2 a 3 años</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Desarrollo de habilidades pre-lingüísticas y vocabulario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Actividades de pre-escritura y coordinación ojo-mano</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Juegos cooperativos y desarrollo de autonomía</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Primeros acercamientos a conceptos matemáticos básicos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería con bloques de colores */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-800">
          Nuestras Instalaciones
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "bg-pink-300", 
            "bg-pink-400", 
            "bg-pink-500", 
            "bg-purple-300", 
            "bg-purple-400", 
            "bg-purple-500"
          ].map((color, index) => (
            <div 
              key={index} 
              className={`${color} h-40 md:h-64 rounded-lg flex items-center justify-center`}
            >
              <span className="text-white font-bold">Foto {index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Listo para darle a tu hijo la mejor educación inicial?
          </h2>
          <p className="text-lg mb-8">
            Programa una visita a nuestras instalaciones y conoce nuestro programa maternal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Agendar Visita
            </Link>
            <Link href="/admisiones" className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
              Proceso de Admisión
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}