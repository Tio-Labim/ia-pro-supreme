# Página de Vendas — IA PRO SUPREME

Página única de vendas (landing page) para venda de acesso a ferramentas de IA, em preto e dourado, com o logo anexado. Público: criadores de conteúdo brasileiros (YouTube Dark / TikTok Shop).

## Estrutura da página (/ — src/routes/index.tsx)

1. **Hero** — logo "IA PRO SUPREME" (imagem anexada, usada como asset), título forte ("Acesso completo às melhores IAs do mercado, em uma assinatura só"), selos/destaques em dourado e CTA principal para o checkout.
2. **Barra de benefícios rápidos** — preço R$ 69,90, liberação imediata via Pix ou cartão, vagas limitadas.
3. **Grade de ferramentas** — cards para cada item do combo: Veo 3 Ultra (ilimitado), Claude Pro, ChatGPT Plus, Gemini Pro, Envato Elements, CapCut Pro, Canva Pro, Audio Pro Studio (narração e clonagem de voz ilimitada), Lip Sync (ilimitado), Minimax H3 (ilimitado), Digen + "E muito mais!".
4. **Seção "YouTube Dark e TikTok Shop"** — bloco explicando o caso de uso: tudo em um só lugar.
5. **Comparação de preço** — R$ 69,90 vs. soma das assinaturas separadas (dezenas de reais), com destaque de economia.
6. **CTA final** — botão para https://pay.kirvano.com/be73dfed-5137-4cb0-9147-b0749f42b028, selos de pagamento (Pix/cartão), aviso "Acesso apenas pelo computador".
7. **Escassez e FAQ curto** — faixa de "Vagas limitadas", perguntas frequentes (liberação, formas de pagamento, acesso).

## Direção visual

- Fundo preto profundo, acentos dourados (gradientes metálicos), tipografia display forte; visual premium de "club exclusivo", coerente com o logo.
- Sem bibliotecas de cores fora dos tokens definidos no styles.css.

## Implementação técnica

- Substituir o placeholder de src/routes/index.tsx pela página; estilos/tokens no src/styles.css.
- Logo: criar asset CDN a partir do upload (lovable-assets) e importar via .asset.json.
- head() próprio na rota com título e descrição da página.
- Botões e CTAs com link direto para o checkout Kirvano (abre em nova aba).

## Verificação

- Build OK, screenshot da página no Playwright conferindo contraste, logo e CTAs funcionais.
