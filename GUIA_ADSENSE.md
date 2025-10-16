# Guia de Configuração do Google AdSense

Este guia detalha como configurar e otimizar o Google AdSense no site O Dia de Oração.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que:

- ✅ Você tem uma conta no Google AdSense aprovada
- ✅ Seu site tem conteúdo original e de qualidade
- ✅ Seu site está em conformidade com as políticas do AdSense
- ✅ Você tem acesso ao código-fonte do site

## 🚀 Passo 1: Criar Conta no Google AdSense

1. Acesse [https://www.google.com/adsense/](https://www.google.com/adsense/)
2. Clique em "Começar"
3. Preencha as informações:
   - URL do site: `https://www.odiadeoracao.com`
   - Email da conta Google
   - País: Brasil
4. Aceite os termos e condições
5. Aguarde a aprovação (pode levar alguns dias)

## 🔑 Passo 2: Obter o ID do AdSense

Após a aprovação:

1. Faça login no [Google AdSense](https://www.google.com/adsense/)
2. Vá em **Conta** → **Informações da conta**
3. Copie seu **ID do editor** (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

## 💻 Passo 3: Configurar o Site

### 3.1. Atualizar o ID do AdSense no Código

Abra o arquivo `src/components/AdSense.jsx` e substitua o ID placeholder:

```javascript
// ANTES:
client = "ca-pub-XXXXXXXXXXXXXXXX"

// DEPOIS (com seu ID real):
client = "ca-pub-1234567890123456"
```

Faça essa substituição em **dois lugares** no arquivo:
- Na função `AdSenseAd` (linha ~4)
- Na função `AdSenseScript` (linha ~70)

### 3.2. Criar Unidades de Anúncio

No painel do AdSense:

1. Vá em **Anúncios** → **Por unidade de anúncio**
2. Clique em **+ Nova unidade de anúncio**
3. Crie as seguintes unidades:

#### Unidade 1: Header Banner
- **Nome**: "Header Banner - O Dia de Oração"
- **Tipo**: Display
- **Tamanho**: Responsivo (horizontal)
- Copie o **ID do slot** (ex: `1234567890`)
- Cole no arquivo `AdSense.jsx` na função `AdSenseHeaderBanner`

#### Unidade 2: In-Article
- **Nome**: "In-Article - O Dia de Oração"
- **Tipo**: In-article
- **Tamanho**: Responsivo
- Copie o **ID do slot** (ex: `1122334455`)
- Cole no arquivo `AdSense.jsx` na função `AdSenseInArticle`

#### Unidade 3: Footer Banner
- **Nome**: "Footer Banner - O Dia de Oração"
- **Tipo**: Display
- **Tamanho**: Responsivo (horizontal)
- Copie o **ID do slot** (ex: `5544332211`)
- Cole no arquivo `AdSense.jsx` na função `AdSenseFooter`

#### Unidade 4: Sidebar (Opcional)
- **Nome**: "Sidebar - O Dia de Oração"
- **Tipo**: Display
- **Tamanho**: 300x250 ou 300x600
- Copie o **ID do slot** (ex: `0987654321`)
- Cole no arquivo `AdSense.jsx` na função `AdSenseSidebar`

### 3.3. Exemplo de Configuração Completa

```javascript
// src/components/AdSense.jsx

export function AdSenseHeaderBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto my-4 px-4">
      <AdSenseAd
        slot="1234567890"  // ← Seu ID do slot aqui
        format="horizontal"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
}

export function AdSenseInArticle() {
  return (
    <div className="my-8">
      <AdSenseAd
        slot="1122334455"  // ← Seu ID do slot aqui
        format="fluid"
        style={{ minHeight: '200px' }}
      />
    </div>
  );
}
```

## 🎯 Passo 4: Posicionamento Estratégico

Os anúncios já estão posicionados estrategicamente no site:

### Página Inicial (`HomePage`)
- ✅ **Header Banner**: Logo após o menu
- ✅ **In-Article**: Entre Features e Liturgia Preview
- ✅ **Footer**: Antes do rodapé

### Página de Liturgia (`LiturgiaPage`)
- ✅ **In-Article**: Após a Primeira Leitura
- ✅ **In-Article**: Após o Salmo
- ✅ **In-Article**: Após a Reflexão

### Página de Santos (`SantosPage`)
- ✅ **In-Article**: Após o título
- ✅ **In-Article**: Após os cards de santos

## 📊 Passo 5: Verificar e Testar

### 5.1. Verificar o Código

1. Faça o build do site:
```bash
pnpm run build
```

2. Verifique se não há erros no console

### 5.2. Testar em Desenvolvimento

**IMPORTANTE**: Os anúncios **não aparecem** em modo de desenvolvimento. Você verá placeholders cinzas com o texto "Espaço para Anúncio Google AdSense".

Para testar os anúncios reais:

1. Faça o build de produção:
```bash
pnpm run build
```

2. Faça o deploy em um servidor real (Vercel, Netlify, etc.)

3. Acesse o site pelo domínio real

### 5.3. Validar no AdSense

1. Acesse o painel do AdSense
2. Vá em **Sites** → **Seu site**
3. Clique em "Verificar código do anúncio"
4. Aguarde a validação (pode levar até 24 horas)

## 💡 Melhores Práticas

### ✅ O que FAZER

1. **Conteúdo de Qualidade**
   - Publique conteúdo original e relevante
   - Atualize a liturgia diariamente
   - Adicione novos artigos regularmente

2. **Experiência do Usuário**
   - Mantenha o site rápido e responsivo
   - Não sobrecarregue com anúncios
   - Garanta boa navegação

3. **Conformidade**
   - Respeite as políticas do AdSense
   - Não clique nos próprios anúncios
   - Não incentive cliques

4. **Otimização**
   - Monitore o desempenho no painel
   - Teste diferentes posições
   - Ajuste conforme necessário

### ❌ O que NÃO fazer

1. **Nunca**:
   - Clicar nos próprios anúncios
   - Pedir para outros clicarem
   - Colocar anúncios em conteúdo proibido
   - Modificar o código dos anúncios

2. **Evite**:
   - Excesso de anúncios (máx. 3 por página)
   - Anúncios muito próximos do conteúdo
   - Anúncios que atrapalham a navegação

## 📈 Monitoramento e Otimização

### Métricas Importantes

Acompanhe no painel do AdSense:

- **RPM** (Receita por mil impressões)
- **CTR** (Taxa de cliques)
- **CPC** (Custo por clique)
- **Impressões** (Visualizações)

### Otimização Contínua

1. **Teste A/B**
   - Experimente diferentes posições
   - Teste tamanhos de anúncios
   - Avalie o desempenho

2. **Análise de Dados**
   - Use Google Analytics
   - Monitore páginas com melhor desempenho
   - Identifique padrões

3. **Ajustes**
   - Remova anúncios com baixo desempenho
   - Adicione anúncios em páginas populares
   - Otimize o conteúdo

## 🚨 Solução de Problemas

### Anúncios não aparecem

**Possíveis causas**:
1. Site em modo de desenvolvimento (normal)
2. Código ainda não validado pelo AdSense (aguarde 24h)
3. ID do AdSense incorreto (verifique o código)
4. Bloqueador de anúncios ativo (desative para testar)

### Conta suspensa

**O que fazer**:
1. Leia o email do AdSense com o motivo
2. Corrija o problema identificado
3. Solicite revisão no painel
4. Aguarde resposta (pode levar semanas)

### Receita baixa

**Como melhorar**:
1. Aumente o tráfego do site (SEO, redes sociais)
2. Melhore a qualidade do conteúdo
3. Otimize a posição dos anúncios
4. Teste diferentes formatos

## 📞 Suporte

### Recursos Oficiais

- **Central de Ajuda**: [support.google.com/adsense](https://support.google.com/adsense)
- **Fórum**: [Comunidade AdSense](https://support.google.com/adsense/community)
- **Políticas**: [Políticas do Programa](https://support.google.com/adsense/answer/48182)

### Contato

Para dúvidas específicas sobre o site:
- Email: contato@odiadeoracao.com

## 📚 Recursos Adicionais

- [Guia de Otimização do AdSense](https://support.google.com/adsense/answer/17957)
- [Melhores Práticas](https://support.google.com/adsense/answer/6242051)
- [Políticas de Conteúdo Religioso](https://support.google.com/adsense/answer/9335564)

---

**Última atualização**: Outubro 2025

**Importante**: Este guia é apenas informativo. Consulte sempre a documentação oficial do Google AdSense para informações atualizadas.

