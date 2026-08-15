import {
  CalendarClock,
  Heart,
  Linkedin,
  Mail,
  Megaphone,
  PenTool,
  PencilLine,
  Phone,
  Printer,
  Users,
} from "lucide-react";
import { FaBehance, FaWhatsapp } from "react-icons/fa6";
import {
  aboutParagraphs,
  brandBoards,
  contact,
  images,
  languages,
  services,
  skills,
  software,
  stats,
  workProjects,
} from "./data";

function SectionTitle({ main, script }: { main: string; script: string }) {
  return (
    <div className="reveal mb-12">
      <h2 className="font-display text-yellow text-6xl tracking-wide uppercase drop-shadow-lg sm:text-7xl md:text-8xl">
        {main}
      </h2>
      {script ? <p className="font-script -mt-4 ml-2 text-3xl text-white drop-shadow sm:-mt-6 sm:text-4xl">{script}</p> : null}
    </div>
  );
}

export function Hero() { return null; }
export function About() { return null; }
function Ring({ value }: { value: number }) { return null; }
export function Skills() { return null; }
const serviceIcons = { "pen-tool": PenTool, "pencil-line": PencilLine, heart: Heart, users: Users, "calendar-clock": CalendarClock, megaphone: Megaphone, printer: Printer } as const;
export function Services() { return null; }
export function Work() { return null; }
export function Identity() { return null; }
export function Logos() { return null; }

export function Contact() {
  const items = [
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone}`, external: false },
    { icon: FaWhatsapp, label: "WhatsApp", href: contact.whatsappUrl, external: true },
    { icon: FaBehance, label: contact.behance, href: contact.behanceUrl, external: true },
    { icon: Linkedin, label: contact.linkedin, href: contact.linkedinUrl, external: true },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}`, external: false },
  ];
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-yellow font-script text-4xl sm:text-5xl">Thank You For</p>
          <h2 className="font-display mt-2 text-6xl leading-tight tracking-wide text-white uppercase drop-shadow-lg sm:text-7xl">Exploring<br />My Work</h2>
          <p className="text-yellow mt-8 max-w-md text-lg leading-relaxed font-semibold tracking-wide uppercase">Every project and design is an opportunity to create something meaningful</p>
          <p className="mt-4 text-lg tracking-wide uppercase">Let&#39;s create something amazing together</p>
        </div>
        <ul className="space-y-5">
          {items.map(({ icon: Icon, label, href, external }) => (
            <li key={label} className="reveal">
              <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/20">
                <span className="bg-yellow flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-black"><Icon size={22} /></span>
                <span className="break-all text-lg">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
