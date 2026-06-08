const logoModules = import.meta.glob("../../empresas/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const DISPLAY_NAMES: Record<string, string> = {
  accenture: "Accenture",
  brde: "BRDE",
  carrefour: "Carrefour",
  ferreira_costa: "Ferreira Costa",
  grupo_boticario: "Grupo Boticário",
  havan: "HAVAN",
  moura: "Moura",
  natura: "Natura",
  neoenergia: "Neoenergia",
  o_boticario: "O Boticário",
  plaenge: "Plaenge",
  porto_bank: "PortoBank",
  riomar: "RioMar",
  sicredi: "Sicredi",
  unimed: "Unimed",
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
