import { TRUSTED_BRANDS } from "@/lib/trusted-brands";

type ClientMarqueeProps = {
  variant?: "home" | "about";
};

export function ClientMarquee({ variant = "home" }: ClientMarqueeProps) {
  const brands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  const itemClass =
    variant === "home"
      ? "group flex h-[4.75rem] min-w-[9.5rem] max-w-[12.5rem] shrink-0 items-center justify-center rounded-2xl border border-[#e8f2ff] bg-white/68 px-5 py-3 shadow-[0_10px_32px_-26px_rgb(0_65_155_/_0.45)]"
      : "flex h-14 min-w-[9rem] max-w-[11.5rem] shrink-0 items-center justify-center rounded-2xl border border-white/35 bg-white/28 px-4 py-2.5";

  return (
    <div className="trust-marquee flex w-max items-center gap-5">
      {brands.map((brand, index) => (
        <div
          key={`${brand.slug}-${index}`}
          className={itemClass}
          aria-hidden={index >= TRUSTED_BRANDS.length}
        >
          <img
            src={brand.logo}
            alt={`Logo ${brand.name}`}
            width={160}
            height={48}
            className="max-h-11 w-auto max-w-[9rem] object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
