
import { Helmet } from 'react-helmet-async';

function TermosDeUso() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - O Dia de Oração</title>
        <meta name="description" content="Leia nossos termos de uso para entender as condições de utilização do portal O Dia de Oração." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Termos de Uso</h1>
        <p className="text-lg text-center text-gray-700 mb-12">Última atualização: 16 de Outubro de 2025</p>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
          <p>
            Bem-vindo ao O Dia de Oração. Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso, que juntamente com nossa política de privacidade, governam o relacionamento do O Dia de Oração com você em relação a este site. Se você discordar de qualquer parte destes termos e condições, por favor, não utilize nosso site.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Uso do Site</h2>
          <p>
            O conteúdo das páginas deste site é para sua informação geral e uso exclusivo. Está sujeito a alterações sem aviso prévio.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Propriedade Intelectual</h2>
          <p>
            Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não se limita a, design, layout, aparência, gráficos e textos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais, que faz parte destes termos e condições.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Links para Outros Sites</h2>
          <p>
            Nosso site pode conter links para outros sites de interesse. No entanto, uma vez que você tenha usado esses links para sair do nosso site, deve notar que não temos controle sobre esse outro site. Portanto, não podemos ser responsáveis pela proteção e privacidade de qualquer informação que você fornecer ao visitar tais sites e tais sites não são regidos por esta declaração de privacidade. Você deve ter cautela e olhar para a declaração de privacidade aplicável ao site em questão.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitação de Responsabilidade</h2>
          <p>
            O Dia de Oração não será responsável por quaisquer perdas ou danos de qualquer natureza, diretos ou indiretos, resultantes do uso ou da incapacidade de usar este site ou de quaisquer informações contidas nele.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Alterações nos Termos de Uso</h2>
          <p>
            O Dia de Oração pode revisar estes termos de uso a qualquer momento, atualizando esta publicação. Você deve visitar esta página periodicamente para revisar os termos de uso atuais.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermosDeUso;

