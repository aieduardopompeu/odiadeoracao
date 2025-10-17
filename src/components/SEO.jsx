import { Helmet } from 'react-helmet-async';

export function SEO({ 
  title = "O Dia de Oração - Portal Católico de Oração e Espiritualidade",
  description = "Portal católico dedicado à oração, espiritualidade e evangelização. Liturgia diária, orações, santos, formação católica e notícias da Igreja.",
  keywords = "oração católica, liturgia diária, santos católicos, espiritualidade, fé católica, Igreja Católica, evangelização",
  canonical = "https://www.odiadeoracao.com/",
  type = "website",
  image = "https://www.odiadeoracao.com/og-image.jpg",
  article = null
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "O Dia de Oração",
    "description": description,
    "url": canonical,
    "publisher": {
      "@type": "Organization",
      "name": "O Dia de Oração",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.odiadeoracao.com/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.odiadeoracao.com/busca?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const articleStructuredData = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author || "O Dia de Oração"
    },
    "publisher": {
      "@type": "Organization",
      "name": "O Dia de Oração",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.odiadeoracao.com/logo.png"
      }
    }
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="O Dia de Oração" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Componente específico para páginas de Liturgia
export function LiturgiaSEO({ data, evangelho }) {
  const title = `Liturgia Diária - ${data} | O Dia de Oração`;
  const description = `Leituras da missa católica de ${data}. ${evangelho.referencia}: ${evangelho.titulo}. Reflexão e oração do dia.`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "O Dia de Oração"
    },
    "publisher": {
      "@type": "Organization",
      "name": "O Dia de Oração",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.odiadeoracao.com/logo.png"
      }
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="liturgia diária, evangelho do dia, leituras católicas, missa do dia, palavra de Deus" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

// Componente específico para páginas de Santos
export function SantoSEO({ santo }) {
  const title = `${santo.nome} - ${santo.titulo} | O Dia de Oração`;
  const description = `Conheça a vida de ${santo.nome}, ${santo.titulo}. Biografia, oração e virtudes. Festa litúrgica: ${santo.data}.`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": santo.nome,
    "description": santo.biografia.substring(0, 200) + "...",
    "image": santo.imagem,
    "jobTitle": santo.titulo
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${santo.nome}, santos católicos, ${santo.data}, vida de santo, oração`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

