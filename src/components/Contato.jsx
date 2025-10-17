
import { Helmet } from 'react-helmet-async';

function Contato() {
  return (
    <>
      <Helmet>
        <title>Contato - O Dia de Oração</title>
        <meta name="description" content="Entre em contato conosco para dúvidas, sugestões ou pedidos de oração." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Entre em Contato</h1>
        <p className="text-lg text-center text-gray-700 mb-12">Sua mensagem é importante para nós. Preencha o formulário abaixo ou utilize nossos canais de comunicação.</p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Sua Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Outros Canais de Contato</h2>
          <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:contato@odiadeoracao.com" className="text-blue-600 hover:underline">contato@odiadeoracao.com</a></p>
          <p className="text-lg text-gray-700">Redes Sociais: Siga-nos no <a href="#" className="text-blue-600 hover:underline">Facebook</a>, <a href="#" className="text-blue-600 hover:underline">Instagram</a></p>
        </div>
      </div>
    </>
  );
}

export default Contato;

