const logoModules = import.meta.glob("../../empresas/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const DISPLAY_NAMES: Record<string, string> = {
  accenture: "Accenture",
  brde: "BRDE",
  carrefour: "Carrefour",
  colegio_cognitivo: "Colégio Cognitivo",
  consul: "Consul",
  dnata: "dnata",
  flor_de_mandacaru: "Flor de Mandacaru",
  hapvida: "Hapvida",
  honda_motos: "Honda Motos",
  mercado_livre: "Mercado Livre",
  riomar: "RioMar",
  saga: "SAGA",
  serrambi_resort: "Serrambi Resort",
  sesi: "SESI",
  sicredi: "Sicredi",
  toyolex: "Toyolex",
};

function slugFromPath(path: string) {
  const fileName = path.split("/").pop() ?? path;
  return fileName.replace(/\.[^.]+$/, "");
}

export type TrustedBrand = {
  slug: string;
  name: string;
  logo: string;
};

export const TRUSTED_BRANDS: TrustedBrand[] = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, logo]) => {
    const slug = slugFromPath(path);
    return {
      slug,
      name: DISPLAY_NAMES[slug] ?? slug.replace(/_/g, " "),
      logo,
    };
  });
