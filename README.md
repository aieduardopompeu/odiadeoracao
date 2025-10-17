# O Dia de Oração - Portal Católico

Portal católico dedicado à oração, espiritualidade e evangelização, com foco em fornecer recursos de qualidade para aprofundar a vida de fé dos católicos.

## 🙏 Sobre o Projeto

O Dia de Oração é um site católico moderno, otimizado para SEO e preparado para monetização, que oferece:

- **Liturgia Diária**: Leituras completas da missa católica com reflexões
- **Orações Católicas**: Repositório de orações tradicionais e meditações
- **Santos**: Biografias, orações e ensinamentos dos santos católicos
- **Formação Católica**: Artigos e conteúdo sobre doutrina e vida cristã
- **Notícias da Igreja**: Curadoria de notícias do Vaticano, CNBB e outras fontes
- **Multimídia**: Vídeos, podcasts e conteúdo audiovisual católico

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework JavaScript para construção da interface
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS para estilização
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Lucide Icons** - Biblioteca de ícones
- **React Router** - Navegação entre páginas
- **React Helmet Async** - Gerenciamento de SEO e meta tags

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 22.x ou superior
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd odiadeoracao

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção

```bash
# Gere os arquivos otimizados para produção
pnpm run build

# Os arquivos estarão na pasta dist/
```

### Preview da Build de Produção

```bash
# Visualize a versão de produção localmente
pnpm run preview
```

## 🎨 Estrutura do Projeto

```
odiadeoracao/
├── public/              # Arquivos estáticos
│   ├── sitemap.xml     # Sitemap para SEO
│   └── robots.txt      # Configuração para crawlers
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes de UI (shadcn)
│   │   ├── SEO.jsx    # Componentes de SEO
│   │   └── AdSense.jsx # Componentes de monetização
│   ├── data/          # Dados do site
│   │   └── liturgiaData.js # Conteúdo católico
│   ├── App.jsx        # Componente principal
│   ├── App.css        # Estilos globais
│   └── main.jsx       # Ponto de entrada
├── index.html         # HTML principal
├── package.json       # Dependências do projeto
└── vite.config.js     # Configuração do Vite
```

## 🔍 SEO e Otimização

O site foi desenvolvido com foco em SEO:

- ✅ Meta tags otimizadas para cada página
- ✅ Schema markup (JSON-LD) para rich snippets
- ✅ Sitemap.xml configurado
- ✅ Robots.txt configurado
- ✅ URLs amigáveis
- ✅ Títulos e descrições únicos por página
- ✅ Open Graph tags para redes sociais
- ✅ Design responsivo (mobile-first)
- ✅ Performance otimizada

## 💰 Monetização com Google AdSense

O site está preparado para monetização com Google AdSense:

### Configuração do AdSense

1. **Obtenha seu ID do AdSense**: Crie uma conta no [Google AdSense](https://www.google.com/adsense/)

2. **Atualize o ID no código**: 
   - Abra o arquivo `src/components/AdSense.jsx`
   - Substitua `ca-pub-XXXXXXXXXXXXXXXX` pelo seu ID real do AdSense

3. **Posicionamento dos anúncios**:
   - **Header Banner**: Topo das páginas (horizontal)
   - **In-Article**: Entre o conteúdo dos artigos
   - **Footer**: Rodapé das páginas
   - **Sidebar**: Lateral (em layouts maiores)

### Políticas do AdSense

- ✅ Conteúdo original e de qualidade
- ✅ Navegação clara e intuitiva
- ✅ Anúncios não intrusivos
- ✅ Experiência do usuário preservada
- ✅ Conformidade com políticas de conteúdo religioso

## 🌐 Deploy

### Opções de Deploy

O site pode ser implantado em diversas plataformas:

#### Vercel (Recomendado)
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça o deploy
vercel
```

#### Netlify
```bash
# Instale a CLI da Netlify
npm i -g netlify-cli

# Faça o deploy
netlify deploy --prod
```

#### GitHub Pages
```bash
# Configure o base no vite.config.js
# Faça o build
pnpm run build

# Faça o deploy da pasta dist/
```

## 📝 Conteúdo

### Atualizando a Liturgia Diária

O conteúdo da liturgia está em `src/data/liturgiaData.js`. Para atualizar:

1. Acesse fontes confiáveis (Vatican News, CNBB)
2. Copie as leituras do dia
3. Atualize o arquivo `liturgiaData.js`
4. Adicione reflexões originais ou curadas

### Adicionando Novos Santos

Para adicionar novos santos ao site:

1. Abra `src/data/liturgiaData.js`
2. Adicione um novo objeto ao array `santosData`
3. Inclua: nome, título, data, biografia, oração, virtudes

### Adicionando Orações

Para adicionar novas orações:

1. Abra `src/data/liturgiaData.js`
2. Adicione um novo objeto ao array `oracoesData`
3. Inclua: categoria, nome, texto

## 🎯 Próximos Passos

### Funcionalidades Futuras

- [ ] Sistema de busca avançada
- [ ] Área de membros/assinantes
- [ ] Comentários moderados
- [ ] Transmissões ao vivo
- [ ] Aplicativo mobile
- [ ] API para integração
- [ ] Sistema de pedidos de oração
- [ ] Newsletter automatizada
- [ ] Loja de produtos religiosos

### Melhorias de Conteúdo

- [ ] Mais biografias de santos
- [ ] Artigos de formação católica
- [ ] Vídeos e podcasts próprios
- [ ] Cursos online
- [ ] E-books gratuitos
- [ ] Calendário litúrgico completo

## 📞 Suporte e Contato

Para dúvidas, sugestões ou suporte:

- **Email**: contato@odiadeoracao.com
- **Site**: https://www.odiadeoracao.com
- **Redes Sociais**: @odiadeoracao

## 📄 Licença

Este projeto é de código proprietário. Todos os direitos reservados.

## 🙏 Agradecimentos

- **Vatican News** - Fonte de liturgia e notícias
- **CNBB** - Referência de conteúdo católico brasileiro
- **ACI Digital** - Notícias e conteúdo católico
- **Canção Nova** - Inspiração e referência

---

**Desenvolvido com ❤️ e fé para a evangelização católica**

*"Ide por todo o mundo e pregai o Evangelho a toda criatura" (Mc 16,15)*

