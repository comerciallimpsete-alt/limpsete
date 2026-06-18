import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  Handshake,
  Images,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  Trophy,
  Users,
  WalletCards,
} from "lucide-react";
import { Nav, Footer } from "@/components/site-chrome";
import { ClientMarquee } from "@/components/client-marquee";

import aboutHeroImg from "../../imagens gerais/equipelimpsete.png";
import aboutTeamImg from "../../imagens gerais/equipelimpsetandando.png";
import serviceConservationImg from "@/assets/service-conservacao.jpg";
import servicePostWorkImg from "@/assets/service-posobra.jpg";
import serviceTeamImg from "@/assets/service-terceirizacao.jpg";
import floorWorkImg from "@/assets/obra-8.png";
import galleryPreviewImg from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a LimpSete · Limpeza Pós-Obra com Excelência" },
      {
        name: "description",
        content:
          "Conheça a LimpSete, empresa especializada em limpeza pós-obra, conservação e soluções profissionais de limpeza com equipes treinadas.",
      },
      { property: "og:title", content: "Sobre a LimpSete · Excelência em cada detalhe" },
      {
        property: "og:description",
        content:
          "Há mais de 15 anos transformando ambientes com limpeza profissional, equipe treinada e compromisso com qualidade.",
      },
    ],
  }),
  component: AboutPage,
});

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5581973224616&text&app_absent=0";

const HERO_STATS = [
  { Icon: Trophy, title: "+15 anos", body: "de experiência" },
  { Icon: Users, title: "Equipe treinada", body: "e qualificada" },
  { Icon: ShieldCheck, title: "Compromisso", body: "com qualidade e segurança" },
] as const;

const ABOUT_FEATURES = [
  { Icon: Users, title: "Equipe especializada", body: "Profissionais treinados e comprometidos." },
  {
    Icon: BadgeCheck,
    title: "Acompanhamento técnico",
    body: "Supervisão constante em cada etapa.",
  },
  { Icon: ShieldCheck, title: "Qualidade garantida", body: "Avaliações e monitoramento rigoroso." },
  {
    Icon: Handshake,
    title: "Confiança e compromisso",
    body: "Foco total na satisfação dos clientes.",
  },
] as const;

const ABOUT_VISUAL_FEATURES = [
  { Icon: Sparkles, title: "Ambientes impecáveis" },
  { Icon: Clock, title: "Agilidade e pontualidade" },
  { Icon: ShieldCheck, title: "Segurança em cada serviço" },
  { Icon: Users, title: "Atendimento personalizado" },
] as const;

const VALUES = [
  {
    Icon: Target,
    title: "Nossa missão",
    body: "Executar com excelência o processo de limpeza pós-obra nos mais diversos cenários, superando expectativas e entregando ambientes prontos para o que importa.",
  },
  {
    Icon: Leaf,
    title: "Meio ambiente",
    body: "Utilizar e prezar por métodos que buscam reduzir ao máximo a agressão ao meio ambiente, promovendo práticas sustentáveis em nossas operações.",
  },
  {
    Icon: Clock,
    title: "Prazos pontuais",
    body: "Agilidade e organização para estruturar de forma sólida nossa equipe e atender às demandas nos prazos acordados, garantindo eficiência em cada etapa.",
  },
  {
    Icon: Smile,
    title: "Satisfação",
    body: "Beneficiar o maior número de pessoas possível com a melhor qualidade possível, garantindo a satisfação dos nossos clientes e construindo relacionamentos duradouros.",
  },
] as const;

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7fbff]">
      <Nav />

      <main className="-mt-20 overflow-hidden bg-[linear-gradient(135deg,#f9fcff_0%,#eef7ff_48%,#f7fbff_100%)]">
        <section className="relative isolate overflow-hidden px-4 pt-32 pb-20 md:px-6 lg:min-h-[calc(100vh-1rem)]">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#f9fcff_0%,#eef7ff_48%,#f7fbff_100%)]" />
          <div className="absolute left-[-12rem] top-16 -z-10 size-[32rem] rounded-full bg-sky-200/45 blur-3xl" />
          <div className="absolute right-[-10rem] top-10 -z-10 size-[34rem] rounded-full bg-primary/18 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f7fbff] to-transparent" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[calc(100vh-11rem)] lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7e9ff] bg-white/72 px-3 py-2 text-xs font-bold text-[#17315a] shadow-[0_14px_40px_-28px_rgb(0_86_190_/_0.6)] backdrop-blur">
                <Building2 className="size-3.5 text-primary" />
                Soluções que elevam o padrão de limpeza
              </span>

              <h1 className="max-w-3xl text-balance font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-[#071838] md:text-6xl lg:text-7xl">
                Veja porque nosso compromisso é zelar pelo seu{" "}
                <span className="text-primary">Espaço</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#365172] md:text-base">
                Há mais de 15 anos entregando soluções completas em limpeza com eficiência,
                confiança e atenção a cada detalhe.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-glow-button inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold"
                >
                  <MessageCircle className="size-4" />
                  Fale com um especialista
                </a>
                <Link
                  to="/"
                  hash="servicos"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#bcd8f7] bg-white/60 px-7 text-sm font-bold text-[#1c4778] shadow-[0_14px_40px_-30px_rgb(0_86_190_/_0.6)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Nossos serviços
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {HERO_STATS.map(({ Icon, title, body }) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#cfe4ff] bg-white/65 text-primary shadow-[0_14px_34px_-26px_rgb(0_86_190_/_0.65)] backdrop-blur">
                      <Icon className="size-5 stroke-[1.7]" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold leading-tight text-[#071838]">{title}</p>
                      <p className="text-xs leading-5 text-[#405a78]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-6 lg:translate-x-8 xl:translate-x-14">
              <div className="absolute -left-3 top-8 z-30 hidden rounded-[1.4rem] border border-[#dcecff] bg-white/88 p-4 text-sm font-semibold text-[#17315a] shadow-[0_18px_50px_-32px_rgb(0_65_155_/_0.68)] backdrop-blur md:block xl:-left-8">
                <Sparkles className="mb-3 size-5 text-primary" />
                Excelência em
                <br />
                cada detalhe.
                <span className="mt-2 block text-primary">Esse é o nosso compromisso.</span>
              </div>

              <div className="relative mx-auto max-w-[620px] px-4 py-8">
                <div className="absolute inset-x-4 top-1/2 -z-10 h-80 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
                <div className="absolute -right-8 top-12 -z-10 size-64 rounded-full bg-sky-300/28 blur-3xl" />
                <div className="absolute -left-6 bottom-10 -z-10 size-56 rounded-full bg-white blur-2xl" />

                <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-2 shadow-[0_30px_90px_-46px_rgb(0_86_190_/_0.8)] backdrop-blur">
                  <div className="overflow-hidden rounded-[1.65rem] bg-[#eaf6ff]">
                    <img
                      src={aboutHeroImg}
                      alt="Equipe LimpSete preparada para limpeza profissional"
                      width={1024}
                      height={683}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute right-2 bottom-12 z-30 hidden items-center gap-4 rounded-full border border-white/70 bg-white/90 px-5 py-3 shadow-[0_18px_50px_-30px_rgb(0_65_155_/_0.7)] backdrop-blur md:flex xl:right-0">
                  <div className="flex -space-x-2">
                    {["JD", "CE", "FL"].map((initials) => (
                      <span
                        key={initials}
                        className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#eaf5ff] text-[10px] font-extrabold text-primary"
                      >
                        {initials}
                      </span>
                    ))}
                    <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-primary text-[10px] font-extrabold text-white">
                      +50
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-primary">Mais de 50 empresas</p>
                    <p className="text-xs text-[#405a78]">atendidas com excelência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-4 md:px-6">
          <div className="absolute inset-x-20 top-1/2 h-12 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl" />
          <div className="relative mx-auto max-w-7xl overflow-hidden py-5">
            <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-primary/85">
              Empresas atendidas pela LimpSete
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <ClientMarquee variant="about" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-24 md:px-6">
          <div className="absolute left-[-10rem] top-20 -z-10 size-[30rem] rounded-full bg-sky-200/38 blur-3xl" />
          <div className="absolute right-[-14rem] bottom-6 -z-10 size-[34rem] rounded-full bg-primary/16 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <div className="text-right lg:order-2 lg:col-span-6">
              <h2 className="ml-auto max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl">
                Excelência em limpeza profissional, compromisso em{" "}
                <span className="text-primary">cada detalhe.</span>
              </h2>
              <div className="mt-3 ml-auto h-2 w-48 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-primary" />

              <div className="ml-auto mt-8 max-w-2xl space-y-5 text-sm leading-7 text-[#203a5d] md:text-base">
                <p>
                  A LimpSete é uma empresa especializada em limpeza pós-obra e terceirização de
                  serviços, atuando com <strong>excelência desde 2011</strong>.
                </p>
                <p>
                  Contamos com uma equipe altamente capacitada e preparada para oferecer{" "}
                  <strong>soluções eficientes</strong> em limpeza profissional.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-4">
                {ABOUT_FEATURES.map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="text-center sm:border-l sm:border-[#dcecff] sm:pl-4 first:sm:border-l-0"
                  >
                    <div className="mx-auto mb-3 flex size-12 items-center justify-center text-primary">
                      <Icon className="size-9 stroke-[1.55]" />
                    </div>
                    <h3 className="text-xs font-extrabold leading-tight text-[#071838]">{title}</h3>
                    <p className="mt-2 text-[11px] leading-5 text-[#526a86]">{body}</p>
                  </div>
                ))}
              </div>

              <div className="ml-auto mt-10 max-w-xl rounded-3xl border border-[#dcecff] bg-white/78 p-6 shadow-[0_18px_60px_-42px_rgb(0_86_190_/_0.62)] backdrop-blur">
                <div className="flex flex-row-reverse gap-4">
                  <div className="font-display text-6xl font-black leading-none text-primary">
                    “
                  </div>
                  <p className="text-sm leading-7 text-[#17315a]">
                    Além dos serviços <strong>pós-obra</strong>, realizamos limpeza{" "}
                    <strong>pré e pós-eventos</strong>, atendendo empresas, condomínios, obras e
                    diversos segmentos.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:order-1 lg:col-span-6">
              <div className="absolute -left-16 top-0 -z-10 h-[92%] w-[80%] rounded-r-[5rem] bg-[linear-gradient(135deg,#1097ff_0%,#006fff_48%,#074184_100%)] shadow-[0_30px_90px_-52px_rgb(0_86_190_/_0.85)]" />
              <div className="absolute -right-10 bottom-2 -z-10 size-72 rounded-full bg-sky-200/70 blur-3xl" />

              <div className="relative mr-auto max-w-2xl">
                <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] border-[6px] border-white bg-white shadow-[0_24px_80px_-46px_rgb(0_65_155_/_0.75)]">
                  <img
                    src={aboutTeamImg}
                    alt="Equipe LimpSete atuando em ambiente corporativo"
                    width={1024}
                    height={576}
                    loading="lazy"
                    className="h-[330px] w-full object-cover object-center"
                  />
                </div>

                <div className="relative z-20 -mt-12 grid grid-cols-3 gap-3 px-5">
                  {[
                    { src: floorWorkImg, alt: "Limpeza mecanizada de piso" },
                    { src: serviceConservationImg, alt: "Produtos profissionais de limpeza" },
                    { src: servicePostWorkImg, alt: "Acabamento de limpeza pós-obra" },
                  ].map((image) => (
                    <div
                      key={image.alt}
                      className="overflow-hidden rounded-3xl border-[5px] border-white bg-white shadow-[0_18px_55px_-35px_rgb(0_65_155_/_0.75)]"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={320}
                        height={220}
                        loading="lazy"
                        className="h-32 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mx-6 -mt-2 grid gap-4 rounded-[2rem] bg-[#062653] p-5 text-white shadow-[0_26px_70px_-42px_rgb(2_16_38_/_0.95)] sm:grid-cols-4">
                  {ABOUT_VISUAL_FEATURES.map(({ Icon, title }) => (
                    <div
                      key={title}
                      className="border-white/10 text-center sm:border-r sm:pr-3 last:sm:border-r-0"
                    >
                      <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-2xl text-primary-glow">
                        <Icon className="size-7 stroke-[1.6]" />
                      </div>
                      <p className="text-xs font-extrabold leading-snug">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-4 py-24 md:px-6">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#f8fbff_0%,#eef7ff_48%,#ffffff_100%)]" />
          <img
            src={serviceTeamImg}
            alt=""
            width={1024}
            height={768}
            loading="lazy"
            aria-hidden="true"
            className="absolute right-0 top-0 -z-10 hidden h-full w-[42%] object-cover object-center opacity-55 lg:block"
          />
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/82 to-[#f8fbff]/22 lg:block" />
          <div className="absolute left-[-14rem] bottom-8 -z-10 size-[32rem] rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute right-10 top-12 -z-10 size-80 rounded-full bg-primary/12 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <header className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/78 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary shadow-soft backdrop-blur">
                <BadgeCheck className="size-3.5" />
                Nossos valores
              </span>
              <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl">
                Princípios que guiam.
                <br />
                <span className="text-primary">Compromissos</span> que entregamos.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#365172] md:text-base">
                Nossos valores estão presentes em cada detalhe do nosso trabalho e são a base da
                confiança que construímos todos os dias.
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-4">
              {VALUES.map(({ Icon, title, body }) => (
                <article
                  key={title}
                  className="relative overflow-hidden rounded-[1.8rem] border border-[#e3efff] bg-white/88 p-7 text-center shadow-[0_22px_70px_-50px_rgb(0_65_155_/_0.7)] backdrop-blur"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-sky-400 to-primary" />
                  <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-[#edf6ff] text-primary shadow-[inset_0_1px_0_rgb(255_255_255_/_0.9),0_16px_42px_-30px_rgb(0_86_190_/_0.75)]">
                    <Icon className="size-10 stroke-[1.55]" />
                  </div>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-[#071838]">
                    {title}
                  </h3>
                  <div className="mx-auto my-5 h-1 w-10 rounded-full bg-primary" />
                  <p className="text-sm leading-7 text-[#304b6c]">{body}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-6 rounded-[1.8rem] border border-[#dcecff] bg-white/76 p-6 shadow-[0_18px_70px_-48px_rgb(0_86_190_/_0.7)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="size-9 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-[#071838]">
                    Mais que limpeza, entregamos confiança.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#405a78]">
                    Cada valor que defendemos se transforma em resultado real para nossos clientes,
                    parceiros e para a sociedade.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[310px] lg:items-center">
                <p className="text-sm font-medium text-[#405a78]">
                  Vamos transformar seu ambiente?
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-glow-button inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold"
                >
                  Fale com um especialista
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-24 md:px-6">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#f8fbff_0%,#eef7ff_54%,#f7fbff_100%)]" />
          <div className="absolute right-[-12rem] top-8 -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-[-10rem] bottom-6 -z-10 size-[28rem] rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute right-20 top-20 -z-10 hidden h-56 w-56 bg-[radial-gradient(circle,rgb(0_111_255_/_0.18)_1px,transparent_1px)] [background-size:18px_18px] md:block" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-[0.28em] text-primary">
                Confira também
              </span>
              <div className="mb-6 h-1 w-10 rounded-full bg-primary" />

              <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl">
                Mais formas de conhecer
                <br />a <span className="text-primary">excelência da LimpSete.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#365172] md:text-base">
                Acompanhe nosso trabalho de perto e descubra como podemos transformar o ambiente da
                sua empresa.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="grid overflow-hidden rounded-[1.8rem] border border-[#dcecff] bg-white/88 p-2 shadow-[0_22px_70px_-50px_rgb(0_65_155_/_0.72)] backdrop-blur sm:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[1.45rem]">
                  <img
                    src={galleryPreviewImg}
                    alt="Ambiente limpo e pronto para uso"
                    width={720}
                    height={520}
                    loading="lazy"
                    className="h-full min-h-[250px] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7">
                  <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary shadow-[inset_0_1px_0_rgb(255_255_255_/_0.85)]">
                    <Images className="size-7 stroke-[1.65]" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#071838]">
                    Galeria e Portfólio
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#405a78]">
                    Confira alguns dos nossos últimos trabalhos e veja a qualidade que entregamos em
                    cada detalhe.
                  </p>
                  <Link
                    to="/galeria"
                    className="mt-7 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full border border-[#bcd8f7] bg-white px-6 text-sm font-bold text-primary shadow-[0_14px_36px_-28px_rgb(0_86_190_/_0.65)] transition-all hover:-translate-y-0.5 hover:bg-primary/5"
                  >
                    Acessar galeria
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>

              <article className="grid overflow-hidden rounded-[1.8rem] border border-[#dcecff] bg-white/88 p-2 shadow-[0_22px_70px_-50px_rgb(0_65_155_/_0.72)] backdrop-blur sm:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[1.45rem]">
                  <img
                    src={serviceTeamImg}
                    alt="Equipe LimpSete preparada para atendimento"
                    width={720}
                    height={520}
                    loading="lazy"
                    className="h-full min-h-[250px] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7">
                  <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary shadow-[inset_0_1px_0_rgb(255_255_255_/_0.85)]">
                    <WalletCards className="size-7 stroke-[1.65]" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#071838]">
                    Faça um Orçamento
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#405a78]">
                    Diga-nos suas necessidades e retornaremos rapidamente com a melhor solução para
                    o seu negócio.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-glow-button mt-7 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold"
                  >
                    Solicitar orçamento
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
