
import { Helmet } from 'react-helmet-async';

function Formacao() {
  return (
    <>
      <Helmet>
        <title>Formação - O Dia de Oração</title>
        <meta name="description" content="Aprofunde sua fé com artigos, e-books e séries sobre doutrina, história da Igreja e vida cristã." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Formação Católica</h1>
        <p className="text-lg text-center text-gray-700 mb-12">Conteúdo para aprofundar sua fé e conhecimento da doutrina católica.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de Card de Artigo/Série */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem de Formação" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Título do Artigo/Série</h3>
              <p className="text-gray-700 mb-4">Uma breve descrição sobre o conteúdo deste material de formação, abordando temas relevantes para a vida cristã.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leia Mais &rarr;</a>
            </div>
          </div>

          {/* Adicione mais cards conforme necessário */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem de Formação" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Outro Título de Formação</h3>
              <p className="text-gray-700 mb-4">Explore este conteúdo para enriquecer sua jornada espiritual e compreender melhor os ensinamentos da Igreja.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leia Mais &rarr;</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/400x250" alt="Imagem de Formação" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Doutrina e Fé</h3>
              <p className="text-gray-700 mb-4">Artigos aprofundados sobre a doutrina católica, sacramentos e a vida dos santos.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Leia Mais &rarr;</a>
            </div>
          </div>
        </div>

        {/* Seção de CTA para e-books ou cursos */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Quer aprofundar ainda mais?</h2>
          <p className="text-lg text-blue-700 mb-6">Confira nossos e-books e cursos exclusivos para um estudo mais detalhado.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Explorar Materiais &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default Formacao;

