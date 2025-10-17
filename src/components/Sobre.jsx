
import { Helmet } from 'react-helmet-async';

function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - O Dia de Oração</title>
        <meta name="description" content="Conheça mais sobre o portal O Dia de Oração, nossa missão e visão." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Sobre Nós</h1>
        <p className="text-lg text-center text-gray-700 mb-12">O Dia de Oração é um portal católico dedicado a aprofundar a vida de oração e espiritualidade, à luz dos ensinamentos de Jesus Cristo e da Santa Igreja Católica.</p>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
          <p>
            Nossa missão é oferecer recursos e ferramentas para que os fiéis possam crescer em sua fé, 
            encontrando inspiração e orientação para sua jornada espiritual diária.
          </p>
          <p>
            Acreditamos no poder transformador da oração e na riqueza da tradição católica, 
            buscando compartilhar conteúdos que nutram a alma e fortaleçam o espírito.
          </p>
          <p>
            Desde a liturgia diária até a vida dos santos, passando por formações e notícias relevantes, 
            nosso objetivo é ser um farol de luz e esperança para todos que buscam uma conexão mais profunda com Deus.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ser a principal referência online para católicos que desejam aprofundar sua vida espiritual, 
            promovendo a evangelização e o crescimento na fé através de conteúdo de qualidade e acessível.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sobre;

