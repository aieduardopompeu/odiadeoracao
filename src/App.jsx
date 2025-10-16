import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Cross, BookOpen, Heart, Users, Church, Newspaper, Video, MessageCircle, Menu, X, Search, Facebook, Instagram, Youtube } from 'lucide-react'
import { SEO, LiturgiaSEO, SantoSEO } from './components/SEO'
import { AdSenseScript, AdSenseHeaderBanner, AdSenseInArticle, AdSenseFooter } from './components/AdSense'
import { liturgiaData, santosData, oracoesData } from './data/liturgiaData'
import './App.css'

// Componente de Header
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Cross className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">O Dia de Oração</span>
              <span className="text-xs text-gray-600">Portal Católico</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Início</Link>
            <Link to="/liturgia" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Liturgia Diária</Link>
            <Link to="/oracoes" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Orações</Link>
            <Link to="/formacao" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Formação</Link>
            <Link to="/santos" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Santos</Link>
            <Link to="/noticias" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Notícias</Link>
            <Link to="/multimidia" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Multimídia</Link>
            <Button size="sm" variant="ghost" className="ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t">
            <Link to="/" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Início</Link>
            <Link to="/liturgia" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Liturgia Diária</Link>
            <Link to="/oracoes" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Orações</Link>
            <Link to="/formacao" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Formação</Link>
            <Link to="/santos" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Santos</Link>
            <Link to="/noticias" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Notícias</Link>
            <Link to="/multimidia" className="block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">Multimídia</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

// Componente de Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6 animate-pulse">
            <Cross className="h-8 w-8 text-blue-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Conecte-se ao Poder Espiritual através da <span className="text-blue-700">Oração</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo ao Dia de Oração, um portal católico dedicado a aprofundar sua vida de oração e espiritualidade, 
            à luz dos ensinamentos de Jesus Cristo e da Santa Igreja Católica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/liturgia">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-xl transition-all">
                <BookOpen className="mr-2 h-5 w-5" />
                Liturgia do Dia
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 hover:bg-blue-50 transition-all">
              <Heart className="mr-2 h-5 w-5" />
              Enviar Pedido de Oração
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de Features
function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Liturgia Diária",
      description: "Leituras, Salmo e reflexão para cada dia, com opção de áudio para acompanhar.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Orações Católicas",
      description: "Repositório completo de orações tradicionais, meditações guiadas e novenas.",
      color: "red"
    },
    {
      icon: Church,
      title: "Santos e Beatos",
      description: "Biografias, ensinamentos e orações dos santos católicos, com o Santo do Dia.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Formação Católica",
      description: "Artigos, e-books e séries sobre doutrina, história da Igreja e vida cristã.",
      color: "green"
    },
    {
      icon: Newspaper,
      title: "Notícias da Igreja",
      description: "Curadoria de notícias do Vaticano, CNBB e da Igreja no Brasil e no mundo.",
      color: "orange"
    },
    {
      icon: Video,
      title: "Multimídia",
      description: "Vídeos, podcasts, homilias e reflexões para enriquecer sua jornada espiritual.",
      color: "indigo"
    }
  ]

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
    red: "bg-red-100 text-red-700 group-hover:bg-red-700 group-hover:text-white",
    purple: "bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white",
    green: "bg-green-100 text-green-700 group-hover:bg-green-700 group-hover:text-white",
    orange: "bg-orange-100 text-orange-700 group-hover:bg-orange-700 group-hover:text-white",
    indigo: "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos para sua Jornada Espiritual
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra uma variedade de recursos católicos para aprofundar sua fé e vida de oração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[feature.color]}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <CardTitle className="group-hover:text-blue-700 transition-colors">{feature.title}</CardTitle>
                <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente de Liturgia Preview
function LiturgiaPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-xl border-2">
          <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-white">Liturgia do Dia</CardTitle>
                <p className="text-blue-100 mt-1">{liturgiaData.diaSemana}, {liturgiaData.data}</p>
                <p className="text-blue-200 text-sm">{liturgiaData.tempoliturgico}</p>
              </div>
              <BookOpen className="h-10 w-10 text-white opacity-80" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">{liturgiaData.evangelho.titulo}</h3>
              <p className="text-sm text-blue-700 mb-3 font-medium">{liturgiaData.evangelho.referencia}</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {liturgiaData.evangelho.texto.substring(0, 300)}...
              </p>
            </div>
            <Link to="/liturgia">
              <Button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 shadow-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Ler Liturgia Completa
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Componente de Newsletter
function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
            <MessageCircle className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Receba Meditações Diárias
          </h2>
          <p className="text-lg mb-8 text-blue-100 leading-relaxed">
            Inscreva-se para receber a Liturgia Diária, reflexões e conteúdo exclusivo diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg">
              Inscrever-se
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Junte-se a milhares de católicos que recebem nossa newsletter diária.
          </p>
        </div>
      </div>
    </section>
  )
}

// Componente de Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Cross className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">O Dia de Oração</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Portal católico dedicado à oração, espiritualidade e evangelização.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/liturgia" className="hover:text-blue-400 transition-colors">Liturgia Diária</Link></li>
              <li><Link to="/oracoes" className="hover:text-blue-400 transition-colors">Orações</Link></li>
              <li><Link to="/santos" className="hover:text-blue-400 transition-colors">Santos</Link></li>
              <li><Link to="/formacao" className="hover:text-blue-400 transition-colors">Formação</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Contato</Link></li>
              <li><Link to="/privacidade" className="hover:text-blue-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-blue-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Parceiros</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.vaticannews.va/pt.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Vatican News</a></li>
              <li><a href="https://www.cnbb.org.br/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">CNBB</a></li>
              <li><a href="https://www.acidigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">ACI Digital</a></li>
              <li><a href="https://www.cancaonova.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Canção Nova</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 O Dia de Oração. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">Portal Católico de Oração e Espiritualidade</p>
        </div>
      </div>
    </footer>
  )
}

// Página Inicial
function HomePage() {
  return (
    <>
      <SEO />
      <AdSenseHeaderBanner />
      <HeroSection />
      <FeaturesSection />
      <AdSenseInArticle />
      <LiturgiaPreview />
      <NewsletterSection />
      <AdSenseFooter />
    </>
  )
}

// Página de Liturgia
function LiturgiaPage() {
  return (
    <>
      <LiturgiaSEO data={liturgiaData.data} evangelho={liturgiaData.evangelho} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Liturgia Diária</h1>
            <p className="text-xl text-gray-600">{liturgiaData.diaSemana}, {liturgiaData.data}</p>
            <p className="text-lg text-blue-700 font-medium">{liturgiaData.tempoliturgico}</p>
          </div>

          <AdSenseInArticle />

          {/* Primeira Leitura */}
          <Card className="mb-8">
            <CardHeader className="bg-blue-50">
              <CardTitle>Primeira Leitura</CardTitle>
              <CardDescription>{liturgiaData.primeiraLeitura.referencia}</CardDescription>
              <p className="text-sm font-medium text-blue-700">{liturgiaData.primeiraLeitura.titulo}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="whitespace-pre-line leading-relaxed text-gray-700">{liturgiaData.primeiraLeitura.texto}</p>
            </CardContent>
          </Card>

          {/* Salmo */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50">
              <CardTitle>Salmo Responsorial</CardTitle>
              <CardDescription>{liturgiaData.salmo.referencia}</CardDescription>
              <p className="text-sm font-medium text-green-700 italic">Refrão: {liturgiaData.salmo.refrão}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="whitespace-pre-line leading-relaxed text-gray-700">{liturgiaData.salmo.texto}</p>
            </CardContent>
          </Card>

          <AdSenseInArticle />

          {/* Evangelho */}
          <Card className="mb-8 border-2 border-blue-700">
            <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
              <CardTitle className="text-white">Evangelho</CardTitle>
              <p className="text-blue-100">{liturgiaData.evangelho.referencia}</p>
              <p className="text-sm font-medium text-white">{liturgiaData.evangelho.titulo}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="whitespace-pre-line leading-relaxed text-gray-700 text-lg">{liturgiaData.evangelho.texto}</p>
            </CardContent>
          </Card>

          {/* Reflexão */}
          <Card className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900">{liturgiaData.reflexao.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line leading-relaxed text-gray-700">{liturgiaData.reflexao.texto}</p>
            </CardContent>
          </Card>

          <AdSenseInArticle />
        </div>
      </div>
    </>
  )
}

// Página de Santos
function SantosPage() {
  return (
    <>
      <SEO 
        title="Santos Católicos - Biografias e Orações | O Dia de Oração"
        description="Conheça a vida dos santos católicos, suas biografias, orações e ensinamentos. Santo do Dia e calendário litúrgico."
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Santos Católicos</h1>
            <p className="text-xl text-gray-600">Conheça a vida e os ensinamentos dos santos da Igreja</p>
          </div>

          <AdSenseInArticle />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {santosData.map((santo) => (
              <Card key={santo.id} className="hover:shadow-xl transition-all">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{santo.nome}</CardTitle>
                      <CardDescription className="text-lg">{santo.titulo}</CardDescription>
                      <p className="text-sm text-purple-700 font-medium mt-2">Festa: {santo.data}</p>
                    </div>
                    <Church className="h-8 w-8 text-purple-700" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Biografia</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{santo.biografia.substring(0, 300)}...</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-purple-900">Oração</h3>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{santo.oracao}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Virtudes</h3>
                    <div className="flex flex-wrap gap-2">
                      {santo.virtudes.map((virtude, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {virtude}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <AdSenseInArticle />
        </div>
      </div>
    </>
  )
}

// Páginas Placeholder
function OracoesPage() {
  return (
    <>
      <SEO 
        title="Orações Católicas - Terço, Novenas e Meditações | O Dia de Oração"
        description="Repositório completo de orações católicas tradicionais, novenas, terço, Via Sacra e meditações guiadas."
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Orações Católicas</h1>
        <p className="text-lg text-gray-600 mb-8">Repositório de orações será implementado aqui.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oracoesData.map((oracao) => (
            <Card key={oracao.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>{oracao.nome}</CardTitle>
                <CardDescription>{oracao.categoria}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{oracao.texto}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

function FormacaoPage() {
  return (
    <>
      <SEO 
        title="Formação Católica - Doutrina e Catequese | O Dia de Oração"
        description="Artigos, e-books e séries sobre doutrina católica, história da Igreja, sacramentos e vida cristã."
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Formação Católica</h1>
        <p className="text-lg text-gray-600">Conteúdo de formação será implementado aqui.</p>
      </div>
    </>
  )
}

function NoticiasPage() {
  return (
    <>
      <SEO 
        title="Notícias da Igreja Católica | O Dia de Oração"
        description="Notícias do Vaticano, CNBB e da Igreja Católica no Brasil e no mundo."
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Notícias da Igreja</h1>
        <p className="text-lg text-gray-600">Notícias católicas serão implementadas aqui.</p>
      </div>
    </>
  )
}

function MultimidiaPage() {
  return (
    <>
      <SEO 
        title="Multimídia - Vídeos e Podcasts Católicos | O Dia de Oração"
        description="Vídeos, podcasts, homilias e reflexões católicas para enriquecer sua jornada espiritual."
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Multimídia</h1>
        <p className="text-lg text-gray-600">Vídeos e podcasts serão implementados aqui.</p>
      </div>
    </>
  )
}

// Componente Principal
function App() {
  return (
    <HelmetProvider>
      <Router>
        <AdSenseScript />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/liturgia" element={<LiturgiaPage />} />
              <Route path="/oracoes" element={<OracoesPage />} />
              <Route path="/formacao" element={<FormacaoPage />} />
              <Route path="/santos" element={<SantosPage />} />
              <Route path="/noticias" element={<NoticiasPage />} />
              <Route path="/multimidia" element={<MultimidiaPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

