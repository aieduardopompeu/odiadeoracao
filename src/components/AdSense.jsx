import { useEffect } from 'react';

// Componente para anúncios do Google AdSense
export function AdSenseAd({ 
  client = "ca-pub-XXXXXXXXXXXXXXXX", // Substituir pelo ID real do AdSense
  slot,
  format = "auto",
  responsive = true,
  style = {}
}) {
  useEffect(() => {
    try {
      if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Não mostrar anúncios em desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className="bg-gray-100 border border-gray-300 p-4 text-center text-sm text-gray-600 rounded" style={style}>
        <p>Espaço para Anúncio Google AdSense</p>
        <p className="text-xs mt-1">({format} - Slot: {slot})</p>
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  );
}

// Anúncio no topo da página (Banner horizontal)
export function AdSenseHeaderBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto my-4 px-4">
      <AdSenseAd
        slot="1234567890"
        format="horizontal"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
}

// Anúncio na sidebar (Banner vertical)
export function AdSenseSidebar() {
  return (
    <div className="sticky top-20">
      <AdSenseAd
        slot="0987654321"
        format="rectangle"
        style={{ minHeight: '250px', minWidth: '300px' }}
      />
    </div>
  );
}

// Anúncio in-article (Dentro do conteúdo)
export function AdSenseInArticle() {
  return (
    <div className="my-8">
      <AdSenseAd
        slot="1122334455"
        format="fluid"
        style={{ minHeight: '200px' }}
      />
    </div>
  );
}

// Anúncio no rodapé
export function AdSenseFooter() {
  return (
    <div className="w-full max-w-7xl mx-auto my-4 px-4">
      <AdSenseAd
        slot="5544332211"
        format="horizontal"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
}

// Script do AdSense para adicionar no head
export function AdSenseScript() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return null;
}

// Componente de anúncio responsivo genérico
export function AdSenseResponsive({ slot, className = "" }) {
  return (
    <div className={`my-6 ${className}`}>
      <AdSenseAd
        slot={slot}
        format="auto"
        responsive={true}
        style={{ display: 'block' }}
      />
    </div>
  );
}

