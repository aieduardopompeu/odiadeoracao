import React from 'react';
import { Helmet } from 'react-helmet-async';

function Multimidia() {
  return (
    <>
      <Helmet>
        <title>Multimídia - O Dia de Oração</title>
        <meta name="description" content="Vídeos, podcasts, homilias e reflexões para enriquecer sua jornada espiritual." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Multimídia Católica</h1>
        <p className="text-lg text-center text-gray-700 mb-12">Explore nossa coleção de vídeos, podcasts e homilias para nutrir sua alma.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de Card de Vídeo */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <iframe 
              className="w-full h-48 object-cover"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Título do Vídeo/Homilia</h3>
              <p className="text-gray-700 mb-4">Uma reflexão profunda sobre a palavra de Deus para o seu dia a dia.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Assistir &rarr;</a>
            </div>
          </div>

          {/* Exemplo de Card de Podcast */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Capa do Podcast" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nome do Podcast</h3>
              <p className="text-gray-700 mb-4">Ouça episódios inspiradores sobre temas da fé católica e espiritualidade.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Ouvir &rarr;</a>
            </div>
          </div>

          {/* Adicione mais cards conforme necessário */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem de Multimídia" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Outro Conteúdo Multimídia</h3>
              <p className="text-gray-700 mb-4">Descubra mais recursos visuais e auditivos para sua caminhada de fé.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Ver Mais &rarr;</a>
            </div>
          </div>
        </div>

        {/* Seção de CTA para mais conteúdo */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Quer mais inspiração?</h2>
          <p className="text-lg text-blue-700 mb-6">Explore nosso arquivo completo de conteúdo multimídia.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Ver Tudo &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default Multimidia;

