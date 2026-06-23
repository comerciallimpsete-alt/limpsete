const NAV_OFFSET = 96;

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior });
}

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior });
  return true;
}

export function normalizeHash(hash: string) {
  return hash.replace(/^#/, "").trim();
}
