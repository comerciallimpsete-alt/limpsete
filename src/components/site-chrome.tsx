import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo3.png";
import { SectionLink } from "@/components/section-link";

export function Logo() {
  return (
    <div className="flex items-center">
      <img src={logoImg} alt="LimpSete" width={512} height={160} className="h-10 w-auto" />
    </div>
  );
}

type NavLink = { label: string; sectionId?: string } & (
  | { to: "/" }
  | { to: "/sobre" }
  | { to: "/galeria" }
);

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5581973224616&text&app_absent=0";

const NAV: NavLink[] = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/", sectionId: "servicos" },
  { label: "Time", to: "/", sectionId: "time" },
  { label: "Sobre", to: "/sobre" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/", sectionId: "contato" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4 md:px-6 pt-4">
      <nav className="glass-nav max-w-7xl mx-auto rounded-full h-16 px-4 md:px-6 flex items-center justify-between">
        <SectionLink sectionId="top" aria-label="Ir para o início">
          <Logo />
        </SectionLink>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV.map((n) =>
            n.to === "/" ? (
              <SectionLink
                key={n.label}
                sectionId={n.sectionId}
                className="text-[#16345f]/80 hover:text-[#071838] transition-colors"
              >
                {n.label}
              </SectionLink>
            ) : (
              <Link
                key={n.label}
                to={n.to}
                className="text-[#16345f]/80 hover:text-[#071838] transition-colors"
                activeProps={{ className: "text-[#071838]" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-glow-button hidden rounded-full px-5 py-2.5 text-sm font-medium text-white md:inline-flex"
        >
          Orçamento
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/65 bg-white/54 text-[#071838] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.8),0_14px_34px_-24px_rgb(0_65_155_/_0.75)] backdrop-blur md:hidden"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-[#071838]/35 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[86vw] max-w-[360px] flex-col border-l border-white/65 bg-white/92 px-5 py-6 shadow-[0_30px_90px_-44px_rgb(2_16_38_/_0.55)] backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <SectionLink sectionId="top" onNavigate={() => setMobileMenuOpen(false)} aria-label="Ir para o início">
            <Logo />
          </SectionLink>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[#cfe4ff] bg-[#f7fbff] text-[#071838] shadow-soft"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          {NAV.map((n) =>
            n.to === "/" ? (
              <SectionLink
                key={n.label}
                sectionId={n.sectionId}
                onNavigate={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-[#16345f] transition-colors hover:bg-primary/8 hover:text-primary"
              >
                {n.label}
              </SectionLink>
            ) : (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-[#16345f] transition-colors hover:bg-primary/8 hover:text-primary"
                activeProps={{ className: "text-primary bg-primary/8" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="primary-glow-button mt-auto inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
        >
          Orçamento
        </a>
      </aside>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-border px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} LimpSete. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
          <a href="https://www.instagram.com/limpsete/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
