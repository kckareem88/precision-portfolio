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
    <div className="reveal mb-10 sm:mb-12">
      <h2 className="font-display text-yellow text-5xl tracking-wide uppercase drop-shadow-lg sm:text-7xl md:text-8xl">
        {main}
      </h2>
      {script ? (
        <p className="font-script -mt-3 ml-1 text-2xl text-white drop-shadow sm:-mt-6 sm:text-4xl">
          {script}
        </p>
      ) : null}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center gap-8 px-5 py-12 sm:min-h-[85vh] sm:gap-10 sm:px-6 sm:py-16 lg:flex-row lg:gap-16">
        <div className="reveal flex-1 text-center lg:text-left">
          <p className="font-display text-xl tracking-widest text-white uppercase sm:text-3xl">Kareem Abdo Hussein</p>
          <div className="relative mt-2 inline-block max-w-full">
            <h1 className="font-display text-yellow text-[18vw] leading-none tracking-wide uppercase drop-shadow-xl sm:text-[9rem] lg:text-[11rem]">Portfolio</h1>
            <span className="font-display absolute top-1/2 -right-1 hidden -translate-y-1/2 text-3xl tracking-[0.4em] text-white uppercase [writing-mode:vertical-rl] sm:block lg:-right-10">2026</span>
          </div>
          <p className="mt-4 text-xl font-light sm:mt-6 sm:text-3xl">Creative Graphic Designer</p>
          <p className="text-base font-semibold tracking-wide sm:text-2xl">&amp; DIGITAL MARKETING SPECIALIST</p>
          <p className="mt-3 text-xs tracking-widest sm:mt-4 sm:text-base">Social Media · Branding · Digital Marketing</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
            <a href="#work" className="bg-yellow text-ink font-display rounded-md px-6 py-3 text-base tracking-wide transition hover:bg-white sm:px-8 sm:text-lg">Explore My Work</a>
            <a href="#contact" className="font-display hover:text-blue-deep rounded-md border-2 border-white px-6 py-3 text-base tracking-wide text-white transition hover:bg-white sm:px-8 sm:text-lg">Contact Me</a>
          </div>
        </div>
        <div className="reveal shrink-0"><img src={images.portrait} alt="Kareem Abdo Hussein" width={1024} height={1536} className="h-auto w-[17rem] object-contain sm:w-[28rem] lg:w-[38rem]" /></div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16">
      <SectionTitle main="About" script="Me" />
      <div dir="rtl" className="font-arabic reveal max-w-4xl space-y-5 text-right sm:space-y-6">
        <p className="text-xl leading-relaxed font-bold sm:text-3xl">{aboutParagraphs[0]}</p>
        <p className="text-lg leading-relaxed sm:text-2xl">{aboutParagraphs[1]}</p>
        <p className="text-lg leading-relaxed sm:text-2xl">{aboutParagraphs[2]}</p>
      </div>
      <div dir="rtl" className="font-arabic mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:mt-16 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="reveal text-center"><p className="font-display text-yellow text-5xl drop-shadow-lg sm:text-7xl">{stat.value}</p><p className="mt-2 text-base font-semibold text-white sm:text-xl">{stat.label}</p></div>
        ))}
      </div>
    </section>
  );
}

function Ring({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 26;
  return (<svg viewBox="0 0 64 64" className="h-12 w-12 shrink-0 -rotate-90 sm:h-13 sm:w-13"><circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="7" /><circle cx="32" cy="32" r="26" fill="none" stroke="var(--brand-yellow)" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${(value / 100) * circumference} ${circumference}`} /><text x="32" y="32" textAnchor="middle" dominantBaseline="central" className="fill-white text-xs font-bold" transform="rotate(90 32 32)">{value}%</text></svg>);
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16">
      <SectionTitle main="My" script="Skills & Expertise" />
      <h3 className="font-display text-yellow reveal mb-5 text-2xl tracking-widest uppercase sm:mb-6 sm:text-3xl">Software</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {software.map((item) => (<div key={item.name} className="reveal flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm"><Ring value={item.value} /><span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/10"><img src={item.icon} alt={`${item.name} icon`} loading="lazy" width={44} height={44} className="h-9 w-9 object-contain drop-shadow-md" /></span><p className="text-base leading-tight font-medium sm:text-lg">{item.name}</p></div>))}
      </div>
      <div className="mt-12 grid gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2"><div className="reveal"><h3 className="font-display text-yellow mb-5 text-2xl tracking-widest uppercase sm:mb-6 sm:text-3xl">Skills</h3><ul className="grid gap-3 text-base sm:grid-cols-2 sm:text-lg">{skills.map((skill) => (<li key={skill} className="flex items-center gap-3"><span className="bg-yellow h-2.5 w-2.5 shrink-0 rounded-full" />{skill}</li>))}</ul></div><div className="reveal"><h3 className="font-display text-yellow mb-5 text-2xl tracking-widest uppercase sm:mb-6 sm:text-3xl">Language</h3><ul className="space-y-3 text-base sm:text-lg">{languages.map((lang) => (<li key={lang.name} className="flex items-center gap-3"><span className="bg-yellow h-2.5 w-2.5 shrink-0 rounded-full" />{lang.name} : {lang.level}</li>))}</ul></div></div>
    </section>
  );
}

const serviceIcons = { "pen-tool": PenTool, "pencil-line": PencilLine, heart: Heart, users: Users, "calendar-clock": CalendarClock, megaphone: Megaphone, printer: Printer } as const;

export function Services() {
  return (<section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16"><SectionTitle main="My" script="Services" /><div className="grid gap-4 sm:gap-5 md:grid-cols-2">{services.map((service) => { const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]; return (<div key={service.en} className="reveal flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/20 sm:gap-5 sm:p-6"><span className="bg-yellow text-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"><Icon size={24} /></span><div className="flex flex-1 flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-4"><p className="text-base font-semibold sm:text-xl">{service.en}</p><p dir="rtl" className="font-arabic text-right text-base font-bold sm:text-xl">{service.ar}</p></div></div>); })}</div></section>);
}

export function Work() {
  return (<section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16"><SectionTitle main="Social Media Designs" script="" /><div className="space-y-12 sm:space-y-20">{workProjects.map((project, index) => (<article key={project.name} className={`reveal flex flex-col gap-6 sm:gap-8 lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}><div className="lg:w-3/5"><img src={project.image} alt={project.alt} loading="lazy" className="h-auto w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl" /></div><div dir="rtl" className="font-arabic rounded-xl bg-white/10 p-5 backdrop-blur-sm sm:rounded-2xl sm:p-8 lg:w-2/5"><h3 className="text-yellow text-2xl font-extrabold sm:text-3xl">اسم الشركة: {project.name}</h3><ul className="mt-5 space-y-3 text-base leading-relaxed sm:mt-6 sm:space-y-4 sm:text-lg"><li><span className="text-yellow font-bold">المجال: </span>{project.field}</li><li><span className="text-yellow font-bold">البلد: </span>{project.country}</li><li><span className="text-yellow font-bold">مدة العمل: </span><span dir="ltr" className="inline-block">{project.period}</span></li><li><span className="text-yellow font-bold">الخدمات المقدمة: </span>{project.servicesAr}</li><li><span className="text-yellow font-bold">البرامج: </span><span dir="ltr" className="inline-block">{project.tools}</span></li></ul><p className="mt-5 border-t border-white/20 pt-4 text-base leading-relaxed sm:mt-6 sm:pt-5 sm:text-lg"><span className="text-yellow font-bold">النتيجة: </span>{project.result}</p></div></article>))}</div></section>);
}

export function Identity() {
  return (<section id="identity" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16"><SectionTitle main="Brand" script="Identity" /><div className="space-y-12 sm:space-y-20">{brandBoards.map((board) => (<article key={board.title} className="reveal"><div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between"><div><h3 className="font-display text-yellow text-2xl tracking-wide uppercase sm:text-4xl">{board.title}</h3><p className="mt-1 text-base font-medium sm:text-lg">{board.subtitle}</p></div><div className="flex items-center gap-2">{board.colors.map((color) => (<span key={color} title={color} className="h-7 w-7 rounded-full border-2 border-white shadow sm:h-8 sm:w-8" style={{ backgroundColor: color }} />))}</div></div><p className="mb-3 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">{board.description}</p><p className="mb-5 text-xs tracking-widest uppercase sm:mb-6 sm:text-sm">Typography: {board.typography}</p><img src={board.image} alt={`${board.title} brand identity board`} loading="lazy" className="h-auto w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl" /></article>))}</div></section>);
}

export function Logos() { return (<section id="logos" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16"><SectionTitle main="Logo Folio" script="" /><img src={images.logofolio} alt="Logo folio: Media Hive, Business Hub, The Iris Beauty & Spa, Albehi, Vanir Travel Group, Assoul Mart, Dalida, Milestones, Pac Man Burger" loading="lazy" className="reveal h-auto w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl" /></section>); }

export function Contact() {
  const items = [
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone}`, external: false },
    { icon: FaWhatsapp, label: "+201116003029", href: contact.whatsappUrl, external: true },
    { icon: FaBehance, label: contact.behance, href: contact.behanceUrl, external: true },
    { icon: Linkedin, label: contact.linkedin, href: contact.linkedinUrl, external: true },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}`, external: false },
  ];
  return (<section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20"><div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2"><div className="reveal"><p className="text-yellow font-script text-3xl sm:text-5xl">Thank You For</p><h2 className="font-display mt-2 text-5xl leading-tight tracking-wide text-white uppercase drop-shadow-lg sm:text-7xl">Exploring<br />My Work</h2><p className="text-yellow mt-6 max-w-md text-base leading-relaxed font-semibold tracking-wide uppercase sm:mt-8 sm:text-lg">Every project and design is an opportunity to create something meaningful</p><p className="mt-3 text-base tracking-wide uppercase sm:mt-4 sm:text-lg">Let&#39;s create something amazing together</p></div><ul className="space-y-3 sm:space-y-5">{items.map(({ icon: Icon, label, href, external }) => (<li key={label} className="reveal"><a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/20 sm:gap-4 sm:p-5"><span className="bg-yellow flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-black sm:h-12 sm:w-12"><Icon size={21} /></span><span className="break-all text-base sm:text-lg">{label}</span></a></li>))}</ul></div></section>);
}
