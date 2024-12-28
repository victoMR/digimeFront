import React from "react";
import { FaEnvelope, FaUserPlus, FaRocket, FaShieldAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const support = () => {
    window.location.href = "mailto:support@digitalme.click";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col items-center justify-center p-4 sm:p-6 pt-2">
      {/* Encabezado con animación */}
      <header className="text-center mb-8 sm:mb-12 animate-fadeIn w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 px-2">
          Bienvenido a <span className="text-gray-800">DigitalMe</span> 🚀
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
          Personaliza tu identidad digital y conecta con el mundo de una manera única.
          Tu presencia digital, a tu manera.
        </p>
      </header>

      {/* Sección de Características */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 w-full max-w-6xl px-4">
          {[
            {
          icon: <FaUserPlus className="text-4xl sm:text-6xl text-blue-500 mb-4" />,
          title: "Crea tu Identidad",
          description: "Diseña una página única que cuente tu historia y muestre tu personalidad.",
            },
            {
          icon: <FaRocket className="text-4xl sm:text-6xl text-purple-500 mb-4" />,
          title: "Impulsa tu Presencia",
          description: "Herramientas potentes para destacar en el mundo digital.",
            },
            {
          icon: <FaShieldAlt className="text-4xl sm:text-6xl text-green-500 mb-4" />,
          title: "Seguridad Total",
          description: "Tu información protegida con los más altos estándares.",
            },
          ].map((feature, index) => (
            <div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
          {feature.icon}
          <h3 className="text-xl sm:text-2xl font-bold mb-3">{feature.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {feature.description}
          </p>
            </div>
          ))}
        </section>

        {/* Sección CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8 w-full px-4">
          <button
            // Reaucerda que luego lo mandaresmoa a registro , ya esta solo que no sabemos como manejar unaos eventos 
            onClick={() => {
          const modal = document.createElement('div');
          modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
          modal.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 animate-fadeIn">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">¡Estamos trabajando en ello! 🚧</h3>
              <p class="text-gray-600 mb-6">Muy pronto podrás crear tu identidad digital. Estamos preparando algo increíble para ti.</p>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Entendido
              </button>
            </div>
          `;
          document.body.appendChild(modal);
          modal.querySelector('button').onclick = () => modal.remove();
          modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
          };
            }}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 text-center"
          >
            Comenzar Ahora
          </button>
          <button
            onClick={support}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            <FaEnvelope className="text-lg" />
            Contactar Soporte
          </button>
        </div>

        {/* Pie de Página */}
        <Footer />
    </div>
  );
};

export default Home;
