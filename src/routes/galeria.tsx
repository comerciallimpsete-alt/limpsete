import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MapPin, Sparkles } from "lucide-react";
import { Nav, Footer } from "@/components/site-chrome";

import obra1 from "@/assets/obra-1.png";
import obra2 from "@/assets/obra-2.png";
import obra3 from "@/assets/obra-3.png";
import obra4 from "@/assets/obra-4.png";
import obra5 from "@/assets/obra-5.png";
import obra6 from "@/assets/obra-6.png";
import obra7 from "@/assets/obra-7.png";
import obra8 from "@/assets/obra-8.png";
import obra9 from "@/assets/obra-9.png";
import obra10 from "@/assets/obra-10.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5581973224616&text&app_absent=0";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Projetos · LimpSete" },
      {
        name: "description",
        content:
          "Conheça projetos reais de limpeza pós-obra, conservação predial e facilities entregues pela LimpSete em condomínios, indústrias e centros corporativos.",
      },
      { property: "og:title", content: "Galeria de Projetos · LimpSete" },
      {
        property: "og:description",
        content:
          "Cases de pós-obra, fachadas, indústrias e corporativos atendidos com padrão técnico LimpSete.",
      },
    ],
  }),
  component: GalleryPage,
});

const PROJECTS = [
  {
    img: obra1,
    title: "Galpão logístico pronto para operação",
    tag: "Pós-Obra",
    location: "Grande Recife, PE",
    body: "Limpeza técnica de piso industrial, docas e áreas de circulação para entrega operacional.",
    metric: "12.000 m²",
    featured: true,
  },
  {
    img: obra5,
    title: "Tratamento mecanizado de piso industrial",
    tag: "Conservação",
    location: "Região Metropolitana, PE",
    body: "Lavadora automática e equipe de apoio para acabamento uniforme em grande área.",
    metric: "Operação mecanizada",
  },
  {
    img: obra3,
    title: "Limpeza de loja com fachada de vidro",
    tag: "Vidros",
    location: "Recife, PE",
    body: "Higienização de piso, vitrines e esquadrias com equipamento profissional.",
    metric: "Equipe em campo",
  },
  {
    img: obra4,
    title: "Apartamento entregue após reforma",
    tag: "Pós-Obra",
    location: "Boa Viagem, Recife",
    body: "Limpeza fina de área gourmet, esquadrias, bancadas e acabamentos internos.",
    metric: "Entrega fina",
  },
  {
    img: obra6,
    title: "Fachada comercial em manutenção",
    tag: "Predial",
    location: "Recife, PE",
    body: "Lavagem de brises, vidros e fachada com controle de segurança em altura.",
    metric: "Manutenção externa",
  },
  {
    img: obra7,
    title: "Lavagem técnica de fachada",
    tag: "Predial",
    location: "Recife, PE",
    body: "Equipe dedicada para lavagem externa, remoção de sujidades e finalização de vidros.",
    metric: "Fachada e vidros",
  },
  {
    img: obra8,
    title: "Piso industrial com alto brilho",
    tag: "Conservação",
    location: "Centro logístico, PE",
    body: "Rotina noturna com lavadora automática, acabamento e inspeção de qualidade.",
    metric: "Turno noturno",
  },
  {
    img: obra9,
    title: "Limpeza fina residencial",
    tag: "Pós-Obra",
    location: "Recife, PE",
    body: "Cuidado manual em rodapés, portas, pisos vinílicos e detalhes de acabamento.",
    metric: "Detalhamento",
  },
  {
    img: obra10,
    title: "Área externa industrial",
    tag: "Manutenção",
    location: "Pernambuco",
    body: "Apoio de equipe em área externa, paredes, esquadrias e pontos de difícil acesso.",
    metric: "Área externa",
  },
  {
    img: obra2,
    title: "Estrutura de armazenagem preparada",
    tag: "Facilities",
    location: "Grande Recife, PE",
    body: "Limpeza de área com porta-paletes, docas e piso industrial antes da ocupação.",
    metric: "Pré-operação",
  },
];

const GALLERY_STATS = ["Pós-obra", "Fachadas", "Pisos industriais", "Operação B2B"] as const;

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="px-4 md:px-6">
        {/* Hero */}
        <section className="relative max-w-7xl mx-auto pt-16 md:pt-24 pb-16">
          <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-60 blur-3xl" />
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5">
                <Sparkles className="size-3" />
                Galeria · Fotos de obra
              </span>
              <h1 className="font-display font-extrabold tracking-tighter leading-[0.95] text-5xl md:text-7xl mb-6 text-balance">
                Operações reais com padrão LimpSete.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Registros de limpeza pós-obra, conservação de fachadas, pisos industriais e entregas
                técnicas realizadas por equipes em campo.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-glow">
                <img
                  src={PROJECTS[0].img}
                  alt={PROJECTS[0].title}
                  width={1280}
                  height={900}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 text-background">
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-2">
                    Destaque · {PROJECTS[0].metric}
                  </p>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    {PROJECTS[0].title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_STATS.map((item) => (
              <div
                key={item}
                className="bg-card border border-border rounded-2xl px-5 py-4 shadow-soft flex items-center gap-3"
              >
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="size-4" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className={`group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1 ${
                  "featured" in p && p.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    "featured" in p && p.featured ? "aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={1280}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-background/95 backdrop-blur text-foreground px-3 py-1.5 rounded-full">
                    {String(i + 1).padStart(2, "0")} · {p.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-soft">
                    {p.metric}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight">
                      {p.title}
                    </h2>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.body}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono uppercase tracking-widest">
                    <MapPin className="size-3" />
                    {p.location}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto pb-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-10 md:p-16">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <div
              className="absolute bottom-0 left-0 size-64 rounded-full bg-primary-glow/30 blur-3xl animate-blob"
              style={{ animationDelay: "3s" }}
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display font-bold tracking-tight text-3xl md:text-5xl mb-6">
                Quer ver seu próximo projeto nesta galeria?
              </h2>
              <p className="text-background/70 text-lg mb-8">
                Solicite uma visita técnica e receba um plano comercial sob medida.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-glow-button inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium"
              >
                Solicitar orçamento
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
