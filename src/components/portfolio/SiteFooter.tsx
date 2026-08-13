import { contact, navLinks } from "./data";

export function SiteFooter() {
  return (
    <footer className="bg-ink mt-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wide">
            KAREEM <span className="text-yellow">ABDO</span> HUSSEIN
          </p>
          <p className="mt-3 text-sm leading-6">
            Creative Graphic Designer
            <br />& Digital Marketing Specialist
          </p>
          <p className="text-yellow mt-3 text-sm">
            Social Media · Branding · Digital Marketing
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-yellow font-display mb-4 tracking-wide">PAGES</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="underline-offset-4 hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-yellow font-display mb-4 tracking-wide">CONTACT</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${contact.phone}`} className="underline-offset-4 hover:underline">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="underline-offset-4 hover:underline">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {contact.behance}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {contact.linkedin}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs">
        Kareem Abdo Hussein — Portfolio 2026
      </div>
    </footer>
  );
}
