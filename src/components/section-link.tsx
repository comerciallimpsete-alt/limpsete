import { useEffect, type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

import { normalizeHash, scrollToSection, scrollToTop } from "@/lib/scroll-to-section";

type SectionLinkProps = ComponentPropsWithoutRef<"a"> & {
  sectionId?: string;
  onNavigate?: () => void;
};

export function SectionLink({
  sectionId,
  onNavigate,
  onClick,
  href,
  children,
  ...props
}: SectionLinkProps) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const targetHref = sectionId ? `/#${sectionId}` : "/";

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate?.();
    onClick?.(event);

    if (pathname === "/") {
      if (sectionId) {
        scrollToSection(sectionId);
        window.history.replaceState(null, "", `#${sectionId}`);
      } else {
        scrollToTop();
        window.history.replaceState(null, "", "/");
      }
      return;
    }

    await navigate({ to: "/", hash: sectionId });
  };

  return (
    <a {...props} href={href ?? targetHref} onClick={handleClick}>
      {children}
    </a>
  );
}

export function HashScrollHandler() {
  const hash = useRouterState({ select: (state) => state.location.hash });
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const sectionId = hash ? normalizeHash(hash) : "";
    if (!sectionId || pathname !== "/") return;

    const timeoutId = window.setTimeout(() => {
      scrollToSection(sectionId, "smooth");
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [hash, pathname]);

  return null;
}
