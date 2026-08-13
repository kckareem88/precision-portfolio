import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-blue-deep/90 sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a className="font-display text-xl tracking-wide text-white" href="#home">
          KAREEM <span className="text-yellow">ABDO</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                active === link.href
                  ? "text-yellow border-yellow border-b-2 pb-1 text-sm font-semibold tracking-wide transition"
                  : "hover:text-yellow text-sm font-semibold tracking-wide text-white transition"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <nav className="bg-blue-deep/95 border-t border-white/10 lg:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    active === link.href
                      ? "text-yellow block py-3 text-base font-semibold tracking-wide"
                      : "hover:text-yellow block py-3 text-base font-semibold tracking-wide text-white transition"
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
