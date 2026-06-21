import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Check,
  Sparkles,
  Shield,
  Trophy,
  Users,
  Building2,
  CirclePlay,
  ArrowDown,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Factory,
  ArrowRight,
  ClipboardCheck,
  Headphones,
  ExternalLink,
  Navigation,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  X as XIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav, Footer } from "@/components/site-chrome";
import { ClientMarquee } from "@/components/client-marquee";

import heroBg from "../../imagens gerais/limpeza-pos-obra.png";
import trainingBg from "../../imagens gerais/limpsetetreinamento.png";
import carousel7Img from "../../fotos do carrossel/7.png";
import carousel8Img from "../../fotos do carrossel/8.png";
import carousel9Img from "../../fotos do carrossel/9.png";
import carousel10Img from "../../fotos do carrossel/10.png";
import carousel11Img from "../../fotos do carrossel/11.png";
import carousel12Img from "../../fotos do carrossel/12.png";
import carousel13Img from "../../fotos do carrossel/13.png";
import carousel14Img from "../../fotos do carrossel/14.png";
import sPos from "@/assets/service-posobra.jpg";
import sEv from "@/assets/service-eventos.jpg";
import sCons from "@/assets/service-conservacao.jpg";
import daniellaImg from "../../diretoria limpsete/Daniella Soares.png";
import wellingtonImg from "../../diretoria limpsete/Wellington Costa.png";
import andreaImg from "../../diretoria limpsete/Andréa Soares.png";
import industrialFloorImg from "@/assets/obra-5.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5581973224616&text&app_absent=0";
const GOOGLE_MAPS_REVIEWS_LINK =
  "https://www.google.com/maps/search/LimpSete+Serviços+de+Limpeza+Pós+obra+Recife";

const SERVICES = [
  {
    Icon: Sparkles,
    title: "Limpeza pós obra residencial e empresarial",
    body: "Remoção de resíduos, poeira e sujeiras pesadas de obras, deixando o ambiente pronto para uso.",
    img: sPos,
  },
  {
    Icon: Factory,
    title: "Limpeza de Piso Industrial (Galpão)",
    body: "Limpeza pesada e especializada para pisos industriais, galpões e áreas de grande fluxo.",
    img: industrialFloorImg,
  },
  {
    Icon: ClipboardCheck,
    title: "Limpeza Pré e Pós Eventos",
    body: "Ambientes sempre impecáveis antes, durante e após eventos. Agilidade e discrição para cada ocasião.",
    img: sEv,
  },
  {
    Icon: Building2,
    title: "Limpeza Predial",
    body: "Conservação completa de empresas, escritórios, condomínios e ambientes comerciais.",
    img: sCons,
  },
];

const SERVICE_BENEFITS = [
  {
    Icon: Users,
    title: "Equipes treinadas e uniformizadas",
    body: "Profissionais preparados para cada tipo de ambiente.",
  },
  {
    Icon: Shield,
    title: "Acompanhamento contínuo",
    body: "Supervisão e controle de qualidade em todas as rotinas.",
  },
  {
    Icon: Sparkles,
    title: "Equipamentos e produtos de qualidade",
    body: "Tecnologia, eficiência e segurança para melhores resultados.",
  },
  {
    Icon: ClipboardCheck,
    title: "Atendimento flexível",
    body: "Planos personalizados de acordo com sua necessidade.",
  },
] as const;

const AUDIENCES = [
  { Icon: Building2, label: "Empresas e escritórios" },
  { Icon: ShoppingCart, label: "Comércios e lojas" },
  { Icon: GraduationCap, label: "Escolas e instituições" },
  { Icon: Stethoscope, label: "Clínicas e consultórios" },
  { Icon: Building2, label: "Condomínios e residenciais" },
  { Icon: Factory, label: "Indústrias e galpões" },
] as const;

const ABOUT_WORK_IMAGES = [
  { src: carousel8Img, alt: "Registro institucional LimpSete 1" },
  { src: carousel7Img, alt: "Registro institucional LimpSete 2" },
  { src: carousel9Img, alt: "Registro institucional LimpSete 3" },
  { src: carousel10Img, alt: "Registro institucional LimpSete 4" },
  { src: carousel11Img, alt: "Registro institucional LimpSete 5" },
  { src: carousel12Img, alt: "Registro institucional LimpSete 6" },
  { src: carousel13Img, alt: "Registro institucional LimpSete 7" },
  { src: carousel14Img, alt: "Registro institucional LimpSete 8" },
] as const;

const LOCATIONS = [
  {
    id: "recife",
    label: "Recife - PE",
    title: "Unidade Recife - PE",
    cardTitle: "LimpSete - Recife",
    address: "Rua Ernesto de Paula Santos, 1114 - Sala 3 - Boa Viagem, Recife - PE",
    phone: "(81) 97322-4616",
    whatsapp: "(81) 99803-6043",
    email: "contato@limpsete.com",
    mapQuery: "Rua Ernesto de Paula Santos 1114 Boa Viagem Recife PE",
  },
  {
    id: "joao-pessoa",
    label: "João Pessoa - PB",
    title: "Unidade João Pessoa - PB",
    cardTitle: "LimpSete - João Pessoa",
    address: "Av. Epitácio Pessoa, 1200 - Torre, João Pessoa - PB, 58040-000",
    phone: "(83) 98604-2632",
    whatsapp: "(83) 98604-2632",
    email: "contato@limpsete.com",
    mapQuery: "Av Epitacio Pessoa 1200 Joao Pessoa PB",
  },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", Icon: Instagram, href: "#" },
  { label: "LinkedIn", Icon: Linkedin, href: "#" },
  { label: "YouTube", Icon: Youtube, href: "#" },
  { label: "X", Icon: XIcon, href: "#" },
  { label: "Facebook", Icon: Facebook, href: "#" },
] as const;

function testimonialAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=eaf5ff&color=006fbf&size=128&bold=true`;
}

const TESTIMONIALS = [
  {
    text: "Contratamos a limpeza pós-obra da LimpSete e valeu muito a pena. Apesar de não ser um serviço barato, já inclui os produtos específicos e mão de obra especializada. Considero essencial para deixar o ambiente realmente limpo para a mudança após uma obra — sem resquícios de poeira ou sujeira nos vidros e cerâmicas. Foram pontuais no atendimento e indicamos a todos que procuram profissionalismo e pontualidade em limpeza pós-obra.",
    image: testimonialAvatar("Juliano Freitas"),
    name: "Juliano Freitas",
    role: "Cliente",
    company: "Google Maps",
    mark: "JF",
  },
  {
    text: "Ótimo atendimento, serviço show!",
    image: testimonialAvatar("Sarah Doce Chá"),
    name: "Sarah",
    role: "Doce Chá",
    company: "Google Maps",
    mark: "SD",
  },
  {
    text: "Excelente empresa, estão de parabéns. Empresa muito séria.",
    image: testimonialAvatar("Almeida Serviços"),
    name: "Almeida Serviços",
    role: "Local Guide",
    company: "Google Maps",
    mark: "AS",
  },
  {
    text: "Excelente empresa de limpeza.",
    image: testimonialAvatar("Rj Gamer"),
    name: "Rj Gamer",
    role: "Cliente",
    company: "Google Maps",
    mark: "RG",
  },
] as const;

type Testimonial = (typeof TESTIMONIALS)[number];

const FIRST_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(0, 2);
const SECOND_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(2, 4);
const THIRD_TESTIMONIAL_COLUMN = TESTIMONIALS.slice(0, 2);

const TEAM = [
  {
    name: "Andréa Soares",
    role: "Fundadora",
    area: "Governança, parcerias e fortalecimento institucional",
    image: andreaImg,
  },
  {
    name: "Wellington Costa",
    role: "Sócio",
    area: "Parceria e Planejamento Corporativo",
    image: wellingtonImg,
  },
  {
    name: "Daniella Soares",
    role: "CEO",
    area: "Estratégia, relacionamento com clientes, expansão comercial e cultura operacional",
    image: daniellaImg,
  },
] as const;

function Hero() {
  const heroHighlights = [
    { Icon: Trophy, title: "+15 anos", body: "de experiência" },
    { Icon: Users, title: "Equipe treinada", body: "e qualificada" },
    { Icon: Shield, title: "Compromisso", body: "com qualidade" },
    { Icon: Building2, title: "50+ empresas", body: "Atendidas com excelência" },
  ];

  return (
    <section
      id="top"
      className="relative isolate -mt-20 min-h-[calc(100vh-1rem)] overflow-hidden px-4 md:px-6 pt-32 pb-16 text-center text-foreground"
    >
      <img
        src={heroBg}
        alt="Equipe LimpSete realizando limpeza corporativa"
        width={1280}
        height={720}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,21,54,0.44)_0%,rgba(22,104,196,0.1)_38%,rgba(237,247,255,0.72)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.72),rgba(255,255,255,0.35)_30%,rgba(18,92,178,0.08)_55%,rgba(5,23,60,0.24)_100%)]" />
      <div className="absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-[#071936]/62 to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l from-[#071936]/48 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-20 opacity-70">
        <div className="absolute left-[18%] top-[68%] size-1.5 rounded-full bg-white shadow-[0_0_24px_8px_rgba(255,255,255,0.85)]" />
        <div className="absolute right-[24%] top-[62%] size-1 rounded-full bg-white shadow-[0_0_24px_8px_rgba(255,255,255,0.85)]" />
        <div className="absolute left-1/2 bottom-14 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="relative z-30 mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col items-center justify-center">
        <div className="animate-fade-up">
          <span className="hero-kicker mb-7">
            <span className="hero-kicker-label">Excelência que transforma ambientes</span>
          </span>
          <h1 className="mx-auto mb-7 max-w-5xl text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-tighter text-[#071838] md:text-6xl lg:text-7xl">
            Limpeza <span className="text-primary">pós-obra</span> com{" "}
            <span className="text-primary">excelência</span> em cada{" "}
            <span className="text-primary">detalhe</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#18345f] md:text-xl">
            Há mais de 15 anos entregando soluções completas em limpeza com eficiência, confiança e
            atenção a cada detalhe.
          </p>
          <div className="mb-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="primary-glow-button h-12 rounded-full px-7 text-sm"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Fale com um especialista
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-pill h-12 rounded-full px-7 text-sm text-[#17315a] hover:text-[#071838]"
            >
              <Link to="/sobre">
                <CirclePlay className="size-4" />
                Conheça a LimpSete
              </Link>
            </Button>
          </div>

          <div className="hero-stat-grid grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {heroHighlights.map(({ Icon, title, body }) => (
              <div key={title} className="hero-stat-card glass-card rounded-3xl px-4 py-6 md:px-5">
                <span className="hero-stat-sweep" aria-hidden="true" />
                <div className="hero-stat-icon mx-auto mb-3 flex size-11 items-center justify-center rounded-full border border-white/70 bg-white/38 text-primary shadow-[inset_0_1px_0_rgb(255_255_255_/_0.72),0_12px_26px_-18px_rgb(0_86_190_/_0.7)] backdrop-blur-xl">
                  <Icon className="size-5 md:size-[1.35rem]" />
                </div>
                <p className="relative z-10 text-base font-bold text-[#09224a] md:text-lg">{title}</p>
                <p className="relative z-10 mt-1 text-sm text-[#27466f] md:text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ y: 2, scale: 1.05 }}
          whileTap={{ scale: 0.88, y: 8 }}
          transition={{ type: "spring", stiffness: 420, damping: 18 }}
          className="mt-7 hidden md:block"
        >
          <Link
            to="/"
            hash="sobre"
            aria-label="Rolar para a próxima seção"
            className="flex size-12 items-center justify-center rounded-full border border-white/70 bg-[linear-gradient(135deg,#dff3ff_0%,#7cc9ff_45%,#168dff_100%)] text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.8),inset_0_-10px_18px_rgb(0_112_255_/_0.22),0_18px_38px_-18px_rgb(0_105_220_/_0.82)] transition-shadow active:shadow-[inset_0_2px_12px_rgb(0_76_180_/_0.28),0_10px_24px_-18px_rgb(0_105_220_/_0.75)]"
          >
            <ArrowDown className="size-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSnapshot() {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = ABOUT_WORK_IMAGES[activeImage];

  const goToPreviousImage = () => {
    setActiveImage((current) => (current === 0 ? ABOUT_WORK_IMAGES.length - 1 : current - 1));
  };

  const goToNextImage = () => {
    setActiveImage((current) => (current === ABOUT_WORK_IMAGES.length - 1 ? 0 : current + 1));
  };

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#eef7ff_52%,#f8fbff_100%)] px-4 pt-20 pb-14 md:px-6 md:pt-28 md:pb-16"
    >
      <div className="absolute left-0 top-0 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 size-96 rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-soft">
            <Users className="size-4" />
            Sobre nós
          </span>

          <h2 className="mb-7 max-w-xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl lg:text-[3.35rem]">
            Mais que limpeza, <span className="text-primary">cuidamos de pessoas e ambientes.</span>
          </h2>

          <p className="max-w-xl text-lg leading-8 text-[#18345f] md:text-xl md:leading-9">
            A LimpSete nasceu com o propósito de transformar ambientes através da limpeza
            profissional de excelência. Há mais de 15 anos, entregamos soluções completas com foco
            em qualidade, confiança e atenção a cada detalhe. Veja Quem atendemos:
          </p>

          <div className="mt-8 mb-6 h-0.5 w-28 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

          <div className="grid max-w-xl grid-cols-3 gap-x-8 gap-y-9">
            {AUDIENCES.map(({ Icon, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center text-primary">
                  <Icon className="size-9 stroke-[1.65]" />
                </div>
                <p className="text-sm font-semibold leading-snug text-[#0d1e3d] md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-[560px] overflow-hidden rounded-[2rem] border-2 border-primary bg-primary/5 p-1.5 shadow-[0_22px_70px_-32px_rgb(0_105_220_/_0.78)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem]">
              <img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                width={960}
                height={1200}
                loading={activeImage === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-500"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071838]/35 to-transparent" />
              <button
                type="button"
                onClick={goToPreviousImage}
                aria-label="Imagem anterior"
                className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/82 text-primary shadow-[0_14px_34px_-22px_rgb(0_65_155_/_0.85)] backdrop-blur transition-transform hover:scale-105"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={goToNextImage}
                aria-label="Próxima imagem"
                className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/82 text-primary shadow-[0_14px_34px_-22px_rgb(0_65_155_/_0.85)] backdrop-blur transition-transform hover:scale-105"
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {ABOUT_WORK_IMAGES.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Mostrar imagem ${index + 1}`}
                    className={`size-2 rounded-full shadow-soft transition-all ${
                      index === activeImage ? "w-6 bg-white" : "bg-white/60 hover:bg-white/85"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientTrustBar() {
  return (
    <section className="bg-[linear-gradient(135deg,#f7fbff_0%,#eef7ff_52%,#f8fbff_100%)] px-4 pb-20 md:px-6 md:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute inset-x-10 top-1/2 h-24 -translate-y-1/2 rounded-full bg-primary/18 blur-3xl" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#dcecff] bg-white/78 py-6 shadow-[0_18px_60px_-42px_rgb(0_86_190_/_0.58)] backdrop-blur">
          <p className="mb-6 text-center text-sm font-semibold text-[#172b4d]">
            <span className="text-primary">Mais de 50 empresas</span> confiam na LimpSete
          </p>

          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <ClientMarquee variant="home" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="empresa" className="py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            A Empresa
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Visão estratégica que vai além do operacional.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            A <strong className="text-foreground">LimpSete</strong> atua no mercado de serviços
            pós-obra e terceirização desde 2011. Dispomos de especialistas altamente capacitados
            para soluções em limpeza com capacidade técnica, acompanhamento, avaliações constantes e
            monitoramento de contratos.
          </p>
          <p>
            Operamos com eficiência, dedicação total e diferenciais exclusivos — desde a limpeza
            técnica de imóveis pós-construção até a conservação contínua de áreas corporativas,
            industriais e comerciais.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-6">
            {[
              "Equipe própria treinada",
              "Supervisão técnica dedicada",
              "Materiais e equipamentos inclusos",
              "SLA e relatórios mensais",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2 text-sm text-foreground">
                <div className="size-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3 text-primary" />
                </div>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  Icon: LucideIcon;
  title: string;
  body: string;
  img: string;
};

function ServiceCard({ Icon, title, body, img }: ServiceCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 24,
  });

  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(0, 128, 255, 0.2), rgba(56, 189, 248, 0.12) 34%, transparent 66%)`;
  const borderBeam = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(0, 128, 255, 0.82), rgba(56, 189, 248, 0.42) 38%, transparent 70%)`;

  return (
    <motion.article
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);
        pointerX.set(x / rect.width - 0.5);
        pointerY.set(y / rect.height - 0.5);
      }}
      onMouseLeave={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        mouseX.set(rect.width / 2);
        mouseY.set(rect.height / 2);
        pointerX.set(0);
        pointerY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="group relative rounded-[2rem] p-px"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: borderBeam }}
      />
      <div className="relative overflow-hidden rounded-[1.95rem] border border-white/70 bg-white/72 shadow-[0_22px_70px_-46px_rgb(0_65_155_/_0.72)] backdrop-blur-md">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="pointer-events-none absolute inset-x-8 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="pointer-events-none absolute -right-20 -top-20 z-10 size-44 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative h-40 overflow-hidden">
          <img
            src={img}
            alt={title}
            width={640}
            height={420}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/72 to-transparent" />
        </div>

        <div className="relative z-30 flex min-h-[250px] flex-col p-5 pt-9">
          <div className="absolute -top-6 left-5 flex size-13 items-center justify-center rounded-2xl border border-white/80 bg-white/82 text-primary shadow-[inset_0_1px_0_rgb(255_255_255_/_0.85),0_16px_34px_-24px_rgb(0_86_190_/_0.8)] backdrop-blur-xl">
            <Icon className="size-7 stroke-[1.7]" />
          </div>

          <h3 className="mb-3 font-display text-lg font-extrabold leading-tight tracking-tight text-[#071838]">
            {title}
          </h3>
          <p className="mb-7 text-xs leading-6 text-[#405a78]">{body}</p>

          <Link
            to="/"
            hash="contato"
            className="mt-auto inline-flex w-fit items-center gap-2 text-xs font-bold text-primary transition-all group-hover:gap-3"
          >
            Saiba mais
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_10%,rgba(0,111,255,0.1),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f4fbff_100%)] px-4 py-20 md:px-6 md:py-28"
    >
      <div className="absolute left-0 top-1/4 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 size-96 rounded-full bg-sky-300/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 grid gap-7 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,1.08fr)_minmax(0,1.18fr)]">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary shadow-soft backdrop-blur">
              <Users className="size-3.5" />
              Nossos serviços
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl">
              Soluções completas em{" "}
              <span className="bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent">
                limpeza e conservação
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#18345f] md:text-xl md:leading-9">
              Atuamos com excelência em diferentes ambientes, oferecendo serviços especializados,
              equipamentos modernos e equipes treinadas para garantir resultados impecáveis.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:self-center lg:pt-7 xl:pt-9">
            {SERVICE_BENEFITS.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="border-primary/10 sm:border-l sm:pl-6 first:sm:border-l-0 first:sm:pl-0 lg:first:border-l-0 lg:first:pl-0"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-white/78 text-primary shadow-[0_14px_36px_-24px_rgb(0_86_190_/_0.7)] backdrop-blur">
                  <Icon className="size-6 stroke-[1.65]" />
                </div>
                <h3 className="mb-2 text-sm font-extrabold leading-snug tracking-tight text-[#071838]">
                  {title}
                </h3>
                <p className="text-xs leading-6 text-[#526a86]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} Icon={s.Icon} title={s.title} body={s.body} img={s.img} />
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 rounded-2xl border border-[#dcecff] bg-white/82 p-4 shadow-[0_18px_60px_-42px_rgb(0_86_190_/_0.65)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Phone className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-[#071838]">
                Precisando de um serviço personalizado?
              </h3>
              <p className="text-xs text-[#45617f]">
                Fale com nossos especialistas e solicite um orçamento sem compromisso.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/galeria"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#cfe4ff] px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Saiba mais
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-glow-button inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold text-white"
            >
              Solicitar orçamento
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="relative mx-auto min-h-[680px] max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#071838] px-6 py-24 text-center text-white shadow-[0_30px_90px_-45px_rgb(2_16_38_/_0.95)] md:px-10">
        <img
          src={trainingBg}
          alt="Treinamento de equipe LimpSete"
          width={1280}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#06152f]/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(20,126,255,0.18),transparent_34%),linear-gradient(180deg,rgba(6,21,47,0.15)_0%,rgba(6,14,30,0.82)_100%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/55 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-primary shadow-[0_14px_35px_-20px_rgb(255_255_255_/_0.55)]">
            <Users className="size-4" />
            Treinamos sua equipe
          </span>

          <h2 className="max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Mais que executar,
            <br />
            ensinamos a <span className="text-primary">Excelência.</span>
          </h2>

          <div className="my-6 h-0.5 w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <p className="mx-auto max-w-xl text-base leading-8 text-white/88">
            Nosso time é preparado para treinar e desenvolver sua equipe com um método próprio,
            prático e eficiente, garantindo padrão, qualidade e consistência em cada detalhe da
            limpeza.
          </p>

          <div className="mt-8 flex w-full max-w-[560px] items-center gap-5 rounded-2xl border border-white/65 bg-white/90 p-5 text-left text-[#10264a] shadow-[0_22px_70px_-38px_rgb(255_255_255_/_0.6)] backdrop-blur">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users className="size-8 stroke-[1.65]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight">
                Um método comprovado. Resultados reais.
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#34506f]">
                Nosso passo a passo já transformou a rotina de limpeza em centenas de empresas,
                elevando padrões e gerando confiança.
              </p>
            </div>
          </div>

          <Button
            asChild
            className="primary-glow-button mt-8 h-12 rounded-2xl px-8 text-sm font-semibold text-white"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Fale com um especialista
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TestimonialsColumn({
  testimonials,
  className,
  duration = 16,
}: {
  testimonials: readonly Testimonial[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6"
      >
        {Array.from({ length: 2 }).map((_, loopIndex) =>
          testimonials.map(({ text, image, name, role, company }, testimonialIndex) => (
            <motion.li
              key={`${loopIndex}-${name}-${testimonialIndex}`}
              aria-hidden={loopIndex === 1}
              tabIndex={loopIndex === 1 ? -1 : 0}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow:
                  "0 25px 50px -12px rgba(0,86,190,0.16), 0 10px 10px -5px rgba(0,86,190,0.06), 0 0 0 1px rgba(0,111,255,0.08)",
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              whileFocus={{
                scale: 1.03,
                y: -8,
                boxShadow:
                  "0 25px 50px -12px rgba(0,86,190,0.16), 0 10px 10px -5px rgba(0,86,190,0.06), 0 0 0 1px rgba(0,111,255,0.08)",
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group w-full max-w-xs cursor-default select-none rounded-3xl border border-[#dcecff] bg-white p-8 shadow-[0_18px_60px_-44px_rgb(0_86_190_/_0.58)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <blockquote className="m-0 p-0">
                <div className="mb-6 flex items-center justify-between">
                  <Quote className="size-8 fill-primary/10 text-primary" />
                  <div className="flex gap-0.5 text-[#ffc928]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="m-0 text-sm font-normal leading-7 text-[#34506f] transition-colors duration-300">
                  {text}
                </p>

                <footer className="mt-7 flex items-center gap-3 border-t border-[#edf5ff] pt-5">
                  <img
                    width={44}
                    height={44}
                    src={image}
                    alt={`Foto de ${name}`}
                    loading="lazy"
                    className="size-11 rounded-full object-cover ring-2 ring-[#edf5ff] transition-all duration-300 ease-in-out group-hover:ring-primary/30"
                  />
                  <div className="min-w-0">
                    <cite className="block truncate font-display text-sm font-bold not-italic tracking-tight text-[#071838] transition-colors duration-300">
                      {name}
                    </cite>
                    <span className="block truncate text-xs leading-5 tracking-tight text-[#647890]">
                      {role}
                    </span>
                    <span className="block truncate text-xs font-semibold leading-5 tracking-tight text-primary">
                      {company}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.li>
          )),
        )}
      </motion.ul>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="absolute left-0 top-1/3 size-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute bottom-0 right-0 size-96 rounded-full bg-primary-glow/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 44, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.7 },
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
            <MessageCircle className="size-3.5" />
            Depoimentos
          </span>
          <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl">
            A confiança de quem já vivencia a <span className="text-primary">excelência</span> da
            LimpSete.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#45617f] md:text-lg">
            Depoimentos reais de clientes no Google Maps. A LimpSete tem{" "}
            <strong className="font-semibold text-[#071838]">5 estrelas</strong> e figura entre as
            empresas de limpeza pós-obra mais recomendadas da região.
          </p>
          <a
            href={GOOGLE_MAPS_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#dcecff] bg-white px-5 py-2.5 text-sm font-semibold text-[#071838] shadow-[0_14px_40px_-30px_rgb(0_86_190_/_0.55)] transition-colors hover:border-primary/30 hover:text-primary"
          >
            <span className="flex gap-0.5 text-[#ffc928]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </span>
            5,0 no Google Maps
            <ExternalLink className="size-4 text-primary" />
          </a>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
          role="region"
          aria-label="Depoimentos em movimento"
        >
          <TestimonialsColumn testimonials={FIRST_TESTIMONIAL_COLUMN} duration={15} />
          <TestimonialsColumn
            testimonials={SECOND_TESTIMONIAL_COLUMN}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={THIRD_TESTIMONIAL_COLUMN}
            className="hidden lg:block"
            duration={17}
          />
        </motion.div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6 rounded-3xl border border-[#dcecff] bg-[#f5faff] p-6 shadow-[0_18px_60px_-44px_rgb(0_86_190_/_0.58)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Shield className="size-9 stroke-[1.65]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight text-[#071838]">
                5 estrelas no Google Maps.
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#45617f]">
                Uma das empresas de limpeza pós-obra mais recomendadas — junte-se a quem já confia
                no nosso trabalho.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:min-w-[320px] md:items-center">
            <a
              href={GOOGLE_MAPS_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Ver avaliações no Google Maps
              <ExternalLink className="size-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-glow-button inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8 text-sm font-semibold text-white"
            >
              Solicitar orçamento
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="time" className="py-24 px-4 md:px-6 bg-card/60 border-y border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
              Nosso Time
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
              Liderança próxima da operação e focada em entrega.
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Quem lidera a LimpSete com foco em qualidade, proximidade e entrega consistente em cada
            operação.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <article
              key={member.name}
              className="bg-background border border-border rounded-3xl overflow-hidden shadow-soft"
            >
              <div className="relative aspect-[4/5] w-full bg-gradient-mesh overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} da LimpSete`}
                  width={768}
                  height={768}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-top"
                />
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-background/95 backdrop-blur text-foreground px-3 py-1.5 rounded-full">
                  {String(i + 1).padStart(2, "0")} · Liderança
                </span>
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  {member.role}
                </p>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="px-4 md:px-6 pb-24">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] bg-foreground text-background py-24 px-6 md:px-16">
        <div className="absolute -top-32 -right-20 size-96 rounded-full bg-primary/40 blur-3xl animate-blob" />
        <div
          className="absolute bottom-0 left-0 size-80 rounded-full bg-primary-glow/30 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-background/60 mb-6 block">
            Solicitar Orçamento
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
            Pronto para elevar o padrão da sua operação?
          </h2>
          <p className="text-background/70 text-lg mb-12 max-w-md">
            Solicite uma visita técnica ou um orçamento detalhado para seu condomínio, indústria ou
            evento.
          </p>

          <div className="space-y-6 mb-10">
            {[
              {
                n: "01",
                Icon: MapPin,
                title: "Endereço",
                body: "Rua Ernesto de Paula Santos, 1114 - Sala 3 - Boa Viagem, Recife - PE",
              },
              {
                n: "02",
                Icon: Phone,
                title: "Comercial",
                body: "(81) 97322-4616 · (81) 99803-6043",
              },
              { n: "03", Icon: Mail, title: "E-mail", body: "contato@limpsete.com · wellingtoncosta@limpsete.com.br" },
            ].map(({ n, Icon, title, body }) => (
              <div key={n} className="flex items-center gap-4">
                <div className="size-12 border border-background/20 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-background/50">
                    {n} — {title}
                  </p>
                  <p className="font-medium">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-glow-button inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold"
          >
            <MessageCircle className="size-4" />
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const [activeLocation, setActiveLocation] = useState<(typeof LOCATIONS)[number]["id"]>("recife");
  const current = LOCATIONS.find((location) => location.id === activeLocation) ?? LOCATIONS[0];
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(current.mapQuery)}&t=m&z=11&output=embed`;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#eef7ff_52%,#f8fbff_100%)] px-4 py-20 md:px-6 md:py-28">
      <div className="absolute left-0 top-1/4 size-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 size-96 rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
              <MapPin className="size-3.5" />
              Onde estamos
            </span>
            <h2 className="mb-5 max-w-xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#071838] md:text-5xl">
              Perto de você, <span className="text-primary">onde sua empresa estiver.</span>
            </h2>
            <p className="mb-7 max-w-xl text-sm leading-7 text-[#355173]">
              A LimpSete possui unidades estratégicas para atender com agilidade e qualidade.
              Escolha a unidade mais próxima e fale com a nossa equipe.
            </p>

            <div className="mb-5 grid grid-cols-2 gap-3 rounded-2xl bg-primary/5 p-1.5">
              {LOCATIONS.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setActiveLocation(location.id)}
                  className={`flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all ${
                    activeLocation === location.id
                      ? "bg-white text-primary shadow-soft"
                      : "text-[#405a78] hover:bg-white/60"
                  }`}
                >
                  <MapPin className="size-4" />
                  {location.label}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-[#dcecff] bg-white/86 p-5 shadow-[0_18px_60px_-42px_rgb(0_86_190_/_0.65)] backdrop-blur">
              <div className="space-y-4">
                {[
                  { Icon: Building2, title: current.title, body: current.address },
                  { Icon: Phone, title: "Telefone", body: current.phone },
                  { Icon: MessageCircle, title: "WhatsApp", body: current.whatsapp },
                  { Icon: Mail, title: "E-mail", body: current.email },
                  { Icon: Mail, title: "Comercial", body: "wellingtoncosta@limpsete.com.br" },
                ].map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="flex gap-4 border-b border-[#edf5ff] pb-4 last:border-b-0"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#071838]">{title}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-[#405a78]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="primary-glow-button mt-4 h-12 w-full rounded-xl text-sm font-semibold text-white"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Users className="size-4" />
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-[#dcecff] bg-white/86 p-5 shadow-[0_24px_70px_-42px_rgb(0_86_190_/_0.68)] backdrop-blur">
              <div className="relative overflow-hidden rounded-2xl border border-[#dcecff] bg-[#eaf5ff]">
                <iframe
                  title={`Mapa ${current.label}`}
                  src={mapUrl}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute left-5 top-5 max-w-[340px] rounded-2xl bg-white/92 p-5 text-left shadow-[0_18px_50px_-30px_rgb(2_16_38_/_0.55)] backdrop-blur">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-[#071838]">
                        {current.cardTitle}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[#405a78]">{current.address}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-primary/8 text-primary">
                        <Navigation className="size-4" />
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-xl bg-primary/8 text-primary">
                        <ExternalLink className="size-4" />
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      current.mapQuery,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-[#dcecff] bg-white/76 p-5 shadow-[0_14px_42px_-34px_rgb(0_86_190_/_0.58)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-[#071838]">
                    Acompanhe a LimpSete
                  </h3>
                  <p className="mt-1 text-xs text-[#45617f]">
                    Veja novidades, bastidores e projetos em andamento.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex size-11 items-center justify-center rounded-2xl border border-[#dcecff] bg-[#f5faff] text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-glow"
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-5 rounded-2xl bg-primary/5 p-6">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-8 stroke-[1.65]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-[#071838]">
                    Duas unidades, o mesmo padrão de excelência
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#405a78]">
                    Estrutura completa, equipe treinada e processos eficientes para entregar os
                    melhores resultados em limpeza para a sua empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 rounded-2xl border border-[#dcecff] bg-white/70 p-4 shadow-[0_18px_60px_-44px_rgb(0_86_190_/_0.58)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Headphones className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-[#071838]">
                Atendimento rápido e personalizado
              </h3>
              <p className="text-xs text-[#45617f]">
                Entre em contato com a unidade mais próxima e descubra como podemos ajudar sua
                empresa.
              </p>
            </div>
          </div>
          <Button
            asChild
            className="primary-glow-button h-12 rounded-xl px-8 text-sm font-semibold text-white"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              Fale com a gente no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <AboutSnapshot />
        <ClientTrustBar />
        <Services />
        <Training />
        <Testimonials />
        <Team />
        <About />
        <Contact />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}
