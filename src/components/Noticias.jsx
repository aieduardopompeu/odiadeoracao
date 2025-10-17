import React from 'react';
import { Helmet } from 'react-helmet-async';

function Noticias() {
  return (
    <>
      <Helmet>
        <title>Notícias - O Dia de Oração</title>
        <meta name="description" content="Curadoria de notícias do Vaticano, CNBB e da Igreja no Brasil e no mundo." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Notícias da Igreja</h1>
        <p className="text-lg text-center text-gray-700 mb-12">Mantenha-se atualizado com as últimas notícias do Vaticano, CNBB e da Igreja Católica global.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de Card de Notícia */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem da Notícia" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Título da Notícia Importante</h3>
              <p className="text-gray-700 mb-4">Um resumo da notícia, destacando os pontos principais e sua relevância para a comunidade católica.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leia a Notícia &rarr;</a>
            </div>
          </div>

          {/* Adicione mais cards conforme necessário */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem da Notícia" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Atualização do Vaticano</h3>
              <p className="text-gray-700 mb-4">Fique por dentro das últimas decisões e pronunciamentos da Santa Sé.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leia a Notícia &rarr;</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem da Notícia" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eventos da CNBB</h3>
              <p className="text-gray-700 mb-4">Cobertura dos principais eventos e assembleias da Conferência Nacional dos Bispos do Brasil.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leia a Notícia &rarr;</a>
            </div>
          </div>
        </div>

        {/* Seção de CTA para arquivo de notícias */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Quer mais notícias?</h2>
          <p className="text-lg text-blue-700 mb-6">Acesse nosso arquivo completo para todas as notícias.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Ver Todas as Notícias &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default Noticias;

