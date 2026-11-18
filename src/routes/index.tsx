import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Sparkles,
  Zap,
  BadgeCheck,
  CreditCard,
  QrCode,
  ChevronDown,
  ArrowRight,
  Clapperboard,
  Bot,
  PenLine,
  Search,
  Layers,
  Scissors,
  Palette,
  Mic,
  SmilePlus,
  Film,
  Move3d,
  Plus,
  Lock,
  ShieldCheck,
  Clock,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import {
  SiClaude,
  SiElevenlabs,
  SiEnvato,
  SiGooglegemini,
  SiMinimax,
} from "react-icons/si";

import logoUrl from "@/assets/ia-pro-supreme-logo.png";
import { CountdownTimer } from "@/components/countdown-timer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CHECKOUT_URL =
  "https://pay.kirvano.com/be73dfed-5137-4cb0-9147-b0749f42b028";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IA PRO SUPREME — Todas as melhores IAs em uma assinatura só" },
      {
        name: "description",
        content:
          "Acesso completo a Veo 3 Ultra, ChatGPT Plus, Claude Pro, Gemini Pro, Canva Pro, CapCut Pro e mais por R$ 69,90. Liberação imediata via Pix ou cartão.",
      },
      { property: "og:title", content: "IA PRO SUPREME — Uma assinatura, todas as IAs" },
      {
        property: "og:description",
        content:
          "Veo 3 Ultra, ChatGPT Plus, Claude Pro, Gemini Pro, Envato, CapCut, Canva e muito mais — por apenas R$ 69,90. Vagas limitadas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const TOOLS = [
  {
    icon: Clapperboard,
    name: "Veo 3 Ultra",
    desc: "Geração de vídeo com IA de ponta, sem limites de uso.",
    unlimited: true,
  },
  {
    icon: PenLine,
    name: "Claude Pro",
    desc: "Textos, roteiros e análises em nível expert.",
    unlimited: false,
  },
  {
    icon: Bot,
    name: "ChatGPT Plus",
    desc: "O modelo mais avançado da OpenAI, sem gargalos.",
    unlimited: false,
  },
  {
    icon: Search,
    name: "Gemini Pro",
    desc: "Pesquisa, criação e raciocínio do Google na versão mais completa.",
    unlimited: false,
  },
  {
    icon: Layers,
    name: "Envato Elements",
    desc: "Milhões de templates, vídeos, músicas e assets.",
    unlimited: false,
  },
  {
    icon: Scissors,
    name: "CapCut Pro",
    desc: "Edição profissional para vídeos que viralizam.",
    unlimited: false,
  },
  {
    icon: Palette,
    name: "Canva Pro",
    desc: "Thumbnails e criativos que convertem em cliques.",
    unlimited: false,
  },
  {
    icon: Mic,
    name: "Audio Pro Studio",
    desc: "Narração e clonagem de voz em qualidade de estúdio.",
    unlimited: true,
  },
  {
    icon: SmilePlus,
    name: "Lip Sync",
    desc: "Sincronização labial perfeita para seus avatares.",
    unlimited: true,
  },
  {
    icon: Film,
    name: "Minimax H3",
    desc: "Geração de vídeo cinematográfica, sem limites.",
    unlimited: true,
  },
  {
    icon: Move3d,
    name: "Digen",
    desc: "Copie os movimentos de qualquer vídeo para o seu.",
    unlimited: false,
  },
];

const BRAND_LOGOS = [
  { name: "Veo 3 Ultra", icon: Clapperboard },
  { name: "Claude Pro", icon: SiClaude },
  { name: "ChatGPT Plus", icon: Bot },
  { name: "Gemini Pro", icon: SiGooglegemini },
  { name: "Envato Elements", icon: SiEnvato },
  { name: "CapCut Pro", icon: Scissors },
  { name: "Canva Pro", icon: Palette },
  { name: "Audio Pro Studio", icon: SiElevenlabs },
  { name: "Lip Sync", icon: SmilePlus },
  { name: "Minimax H3", icon: SiMinimax },
  { name: "Digen", icon: Move3d },
];

const PLANS = [
  { name: "Mensal", duration: "1 mês de acesso", price: "69,90" },
  {
    name: "Trimestral",
    duration: "3 meses de acesso",
    price: "159,90",
    featured: true,
    savings: "Economize R$ 49,80",
  },
  { name: "Semestral", duration: "6 meses de acesso", price: "279,90", savings: "Economize R$ 139,50" },
  { name: "Anual", duration: "12 meses de acesso", price: "419,90", savings: "Economize R$ 418,90" },
];

const TESTIMONIALS = [
  {
    name: "Lucas M.",
    role: "Canal dark no YouTube",
    text: "Mano, eu num sabia nem mexer direito nessas parada de IA kkkk mas ja fiz mais de 30 video pro canal. O Veo 3 é insano, gera cena pronta em segundos. To faturando com adsense e afiliado, valeu cada centavo.",
    stars: 5,
  },
  {
    name: "Amanda R.",
    role: "TikTok Shop",
    text: "Comecei achando q ia ser dificil demais pq nao manjo muito de tecnologia, mas é super intuitivo msm. Ja cancelei umas 3 assinatura q pagava separado e to economizando uma grana boa. O combo se paga facil.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    role: "Criador de conteudo",
    text: "Sou meio burro com tecnologia serio kkk mas consegui fazer meus primeiro criativo sozinho no Canva Pro e editar no CapCut. Nunca achei q ia conseguir ganhar dinheiro assim, to chocada com o resultado.",
    stars: 5,
  },
];

const PRICE_COMPARISON = [
  { tool: "ChatGPT Plus", price: "R$ 120/mês" },
  { tool: "Claude Pro", price: "R$ 120/mês" },
  { tool: "Canva Pro", price: "R$ 55/mês" },
  { tool: "CapCut Pro", price: "R$ 35/mês" },
  { tool: "Envato Elements", price: "R$ 65/mês" },
];

function GoldButton({
  children,
  className = "",
  href = CHECKOUT_URL,
  pulse = false,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  pulse?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`gold-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold tracking-wide uppercase transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] ${pulse ? "gold-btn-pulse" : ""} ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold/80">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Faixa de escassez dinâmica */}
      <div className="border-b border-gold/20 bg-gold/5">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-semibold tracking-wide sm:text-sm">
          <Sparkles className="h-4 w-4 text-gold" />
          Oferta expira em <CountdownTimer /> — garanta seu acesso agora
          <Sparkles className="h-4 w-4 text-gold" />
        </p>
      </div>

      {/* Topo */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img
              src={logoUrl}
              alt="Logo IA Pro Supreme"
              className="h-9 w-9 shrink-0 rounded-full border border-gold/40 object-cover sm:h-10 sm:w-10"
            />
            <span className="font-display truncate text-xs font-extrabold tracking-widest uppercase text-foreground sm:text-sm md:text-base">
              IA Pro <span className="text-gold">Supreme</span>
            </span>
          </div>
          <GoldButton
            href={CHECKOUT_URL}
            className="shrink-0 rounded-full px-3 py-2 text-[10px] font-bold sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="hidden sm:inline">Liberar meu acesso</span>
            <span className="sm:hidden">Acessar</span>
          </GoldButton>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-gold">
              <Zap className="h-3.5 w-3.5" />
              Combo completo de IA
            </span>
            <h1 className="font-display mt-5 text-4xl leading-[1.08] font-extrabold sm:text-6xl">
              As melhores IAs do mercado,{" "}
              <span className="gold-text">em uma assinatura só</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Veo 3 Ultra, ChatGPT Plus, Claude Pro, Gemini Pro, Canva, CapCut,
              Envato e muito mais.{" "}
              <span className="font-semibold text-foreground">
                Tudo o que você precisa para YouTube Dark e TikTok Shop
              </span>{" "}
              — em um único lugar.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <GoldButton href="#planos" pulse>
                Desbloquear todas as IAs agora
              </GoldButton>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">R$ 69,90/mês</p>
                <p>economize mais de R$ 260 vs. assinaturas separadas</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-gold" /> Liberação imediata
              </span>
              <span className="inline-flex items-center gap-2">
                <QrCode className="h-4 w-4 text-gold" /> Pix
              </span>
              <span className="inline-flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-gold" /> Cartão
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Acesso seguro
              </span>
            </div>
          </div>
          <div className="relative min-w-0 overflow-hidden rounded-2xl border border-gold/25 bg-card/70 py-6 text-center shadow-[0_0_70px_-35px_var(--color-gold)]">
            <div className="mb-5 flex flex-col items-center gap-1 px-5">
              <p className="text-xs font-bold uppercase text-gold">Tudo incluso</p>
              <span className="text-xs text-muted-foreground">11+ ferramentas</span>
            </div>
            <div className="logo-marquee overflow-hidden" aria-label="Ferramentas inclusas no IA Pro Supreme">
              <div className="logo-marquee-track flex w-max gap-3 px-3">
                {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    aria-hidden={index >= BRAND_LOGOS.length}
                    className="flex h-24 w-32 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-background px-3 text-center"
                  >
                    <brand.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                    <span className="text-xs font-bold text-foreground">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-5 px-5 text-center text-xs text-muted-foreground">
              Criação, vídeo, voz, design e edição em um só acesso
            </p>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="reveal-on-scroll border-y border-gold/20 bg-card/60">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <span className="font-display text-xl font-extrabold text-foreground">
                +80
              </span>
              <span className="text-sm text-muted-foreground">criadores ativos</span>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              <span className="font-display text-xl font-extrabold text-foreground">
                +100
              </span>
              <span className="text-sm text-muted-foreground">acessos liberados</span>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-gold text-gold" />
              <span className="font-display text-xl font-extrabold text-foreground">
                4.7/5
              </span>
              <span className="text-sm text-muted-foreground">satisfação</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="testimonial-card rounded-2xl border border-border bg-background p-6"
              >
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{t.text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade de ferramentas */}
      <section className="reveal-on-scroll mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          eyebrow="O combo"
          title={
            <>
              Tudo que entra no seu <span className="gold-text">IA PRO SUPREME</span>
            </>
          }
          subtitle="Ferramentas separadas custariam dezenas de reais cada. Aqui, todas em um só acesso."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl border border-border bg-card p-6 text-center transition-colors duration-200 hover:border-gold/50"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                  <tool.icon className="h-5 w-5 text-gold" />
                </div>
                {tool.unlimited ? (
                  <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-gold">
                    Ilimitado
                  </span>
                ) : null}
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-foreground">
                {tool.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{tool.desc}</p>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/50 bg-gold/5 p-6 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10">
              <Plus className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-display text-lg font-bold text-gold">
              E muito mais!
            </h3>
            <p className="text-sm text-muted-foreground">
              Novas ferramentas de IA adicionadas ao combo todo mês.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Dark e TikTok Shop */}
      <section className="reveal-on-scroll border-y border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <SectionTitle
            eyebrow="Feito para quem monetiza"
            title={
              <>
                Tudo para <span className="gold-text">YouTube Dark</span> e{" "}
                <span className="gold-text">TikTok Shop</span> em um só lugar
              </>
            }
            subtitle="As mesmas ferramentas poderosas para as duas plataformas. Crie, edite e publique sem limites."
          />
          <div className="mt-12 rounded-2xl border border-border bg-background p-8 sm:p-10">
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
              {[
                "Vídeos com IA: Veo 3 Ultra e Minimax H3 geram cenas prontas",
                "Roteiros e títulos com ChatGPT Plus e Claude Pro",
                "Narração e clonagem de voz ilimitada no Audio Pro Studio",
                "Edição e sincronização labial com CapCut Pro e Lip Sync",
                "Criativos que vendem com Canva Pro e Envato Elements",
                "Copie movimentos de vídeos de sucesso com o Digen",
                "Músicas e assets ilimitados para seus anúncios",
                "Volume alto de conteúdo sem travar em limites de uso",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-left text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comparação de Preços */}
      <section className="reveal-on-scroll mx-auto max-w-4xl px-4 py-20">
        <SectionTitle
          eyebrow="Economia real"
          title={
            <>
              Quanto você <span className="gold-text">economiza</span> com o combo
            </>
          }
          subtitle="Assinar cada ferramenta separadamente custa muito mais. Veja a diferença:"
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-2 border-b border-border bg-muted/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span>Ferramenta</span>
            <span className="text-right">Preço individual</span>
          </div>
          {PRICE_COMPARISON.map((item) => (
            <div
              key={item.tool}
              className="price-compare-row grid grid-cols-2 border-b border-border/50 px-6 py-3.5 text-sm"
            >
              <span className="font-medium text-foreground">{item.tool}</span>
              <span className="text-right text-muted-foreground line-through decoration-muted-foreground/50">
                {item.price}
              </span>
            </div>
          ))}
          <div className="grid grid-cols-2 border-b border-border/50 px-6 py-3.5 text-sm">
            <span className="font-bold text-destructive">Total separado</span>
            <span className="text-right font-bold text-destructive line-through">
              R$ 395+/mês
            </span>
          </div>
          <div className="price-compare-highlight grid grid-cols-2 px-6 py-5">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-gold" />
              <span className="font-display text-lg font-extrabold text-foreground">
                IA Pro Supreme
              </span>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl font-extrabold text-gold">
                R$ 69,90<span className="text-sm font-normal text-muted-foreground">/mês</span>
              </p>
              <p className="text-xs font-bold text-gold">
                Economia de ~82%
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <GoldButton href="#planos" pulse>
            Quero economizar agora
          </GoldButton>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="reveal-on-scroll scroll-mt-24 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Escolha seu plano"
            title={
              <>
                Quanto mais tempo, <span className="gold-text">mais você economiza</span>
              </>
            }
            subtitle="Todos os planos incluem as mesmas ferramentas e liberação imediata após o pagamento."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 text-center ${plan.featured ? "border-gold/70 bg-gold/10 shadow-[0_0_50px_-25px_var(--color-gold)]" : "border-border bg-card"}`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase text-primary-foreground">
                    Melhor custo-benefício
                  </span>
                ) : null}
                <p className="text-sm font-bold uppercase text-gold">Plano {plan.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{plan.duration}</p>
                <p className="font-display mt-5 flex items-start justify-center text-foreground">
                  <span className="mt-1 text-base font-bold">R$</span>
                  <span className="ml-1 text-4xl font-extrabold">{plan.price}</span>
                </p>
                {"savings" in plan && plan.savings ? (
                  <p className="mt-2 text-xs font-bold text-gold">{plan.savings}</p>
                ) : null}
                <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                  {["11+ ferramentas premium", "Liberação imediata", "Pix ou cartão"].map((item) => (
                    <li key={item} className="flex justify-center gap-2 text-center">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <GoldButton className="mt-7 w-full px-4 py-3 text-sm">
                  Começar agora
                </GoldButton>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  Checkout seguro
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Otimizado para desktop — experiência completa garantida. Todos os botões direcionam para o checkout seguro.
          </p>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="reveal-on-scroll mx-auto max-w-4xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center">
            <ShieldCheck className="h-8 w-8 text-gold" />
            <p className="text-sm font-bold text-foreground">Pagamento Seguro</p>
            <p className="text-xs text-muted-foreground">Checkout criptografado via Kirvano</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center">
            <Clock className="h-8 w-8 text-gold" />
            <p className="text-sm font-bold text-foreground">Acesso Imediato</p>
            <p className="text-xs text-muted-foreground">Liberação automática após pagamento</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center">
            <BadgeCheck className="h-8 w-8 text-gold" />
            <p className="text-sm font-bold text-foreground">Garantia de 7 Dias</p>
            <p className="text-xs text-muted-foreground">Não gostou? Devolvemos seu dinheiro</p>
          </div>
        </div>
      </section>

      {/* FAQ Expandido */}
      <section className="reveal-on-scroll border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-12 space-y-4">
            {[
              {
                q: "Como recebo meu acesso?",
                a: "A liberação é imediata após a confirmação do pagamento, via Pix ou cartão. Você recebe o acesso direto no seu e-mail em poucos minutos.",
              },
              {
                q: "É seguro? Recebo login próprio?",
                a: "Sim, totalmente seguro. Cada membro recebe credenciais individuais e acesso exclusivo. Seus dados e sessões são privados.",
              },
              {
                q: "Posso usar no celular?",
                a: "Atualmente o acesso é otimizado para desktop, garantindo performance máxima em todas as ferramentas. Versão mobile está em desenvolvimento.",
              },
              {
                q: "O que está incluído?",
                a: "Veo 3 Ultra, Claude Pro, ChatGPT Plus, Gemini Pro, Envato Elements, CapCut Pro, Canva Pro, Audio Pro Studio, Lip Sync, Minimax H3, Digen e novas ferramentas adicionadas mensalmente.",
              },
              {
                q: "Tem garantia?",
                a: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.",
              },
              {
                q: "Posso cancelar quando quiser?",
                a: "Sim. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel da Kirvano, sem multas ou taxas extras.",
              },
              {
                q: "Como funciona o acesso compartilhado?",
                a: "Você recebe acesso individual às ferramentas através de um portal exclusivo. Cada ferramenta tem seu próprio método de acesso, todos seguros e estáveis.",
              },
              {
                q: "As vagas são realmente limitadas?",
                a: "Sim. O combo é liberado em lotes com vagas limitadas para manter a qualidade e estabilidade do acesso de todos os membros.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-background px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-left">
                  {item.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="reveal-on-scroll relative overflow-hidden py-24">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <BadgeCheck className="mx-auto h-12 w-12 text-gold" />
          <h2 className="font-display mt-6 text-3xl leading-tight font-extrabold sm:text-5xl">
            Pronto para produzir mais,{" "}
            <span className="gold-text">gastando menos?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Junte-se a mais de 100 criadores que já economizam centenas de reais por mês. Liberação imediata, risco zero.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <GoldButton href={CHECKOUT_URL} pulse>
              Liberar meu acesso agora
            </GoldButton>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                Pagamento seguro
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gold" />
                Acesso imediato
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-3.5 w-3.5 text-gold" />
                Garantia 7 dias
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
          <img
            src={logoUrl}
            alt="Logo IA Pro Supreme"
            className="h-14 w-14 rounded-full border border-gold/40 object-cover"
          />
          <p className="font-display text-sm font-bold tracking-widest uppercase">
            IA Pro <span className="text-gold">Supreme</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Otimizado para desktop. Liberação imediata após o pagamento,
            via Pix ou cartão. Garantia de 7 dias.
          </p>
        </div>
      </footer>
    </div>
  );
}