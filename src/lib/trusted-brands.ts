const logoModules = import.meta.glob("../../empresas/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const DISPLAY_NAMES: Record<string, string> = {
  accenture: "Accenture",
  brde: "BRDE",
  carrefour: "Carrefour",
  colegio_cognitivo: "Colégio Cognitivo",
  ferreira_costa: "Ferreira Costa",
  grupo_boticario: "Grupo Boticário",
  hapvida: "Hapvida",
  natura: "Natura",
  neoenergia: "Neoenergia",
  o_boticario: "O Boticário",
  riomar: "RioMar",
  serrambi_resort: "Serrambi Resort",
  sesi: "SESI",
  sicredi: "Sicredi",
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
