import { useEffect, useState } from "react";
import { nav, profile } from "../content";

// Highlights whichever section currently sits under the nav bar.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = nav.map((n) => n.id);

export default function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav
            .filter((n) => n.id !== "contact")
            .map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={active === n.id ? "is-active" : undefined}
                aria-current={active === n.id ? "true" : undefined}
              >
                {n.label}
              </a>
            ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Let's talk <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className="nav-sheet" hidden={!open}>
        <div className="container">
          {nav.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
