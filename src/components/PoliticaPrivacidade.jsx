
import { Helmet } from 'react-helmet-async';

function PoliticaPrivacidade() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - O Dia de Oração</title>
        <meta name="description" content="Leia nossa política de privacidade para entender como seus dados são coletados e utilizados." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Política de Privacidade</h1>
        <p className="text-lg text-center text-gray-700 mb-12">Última atualização: 16 de Outubro de 2025</p>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
          <p>
            A sua privacidade é importante para nós. É política do O Dia de Oração respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site O Dia de Oração, e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
          </p>
        </div>
      </div>
    </>
  );
}

export default PoliticaPrivacidade;

