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
      {script ? (
        <p className="font-script -mt-4 ml-2 text-3xl text-white drop-shadow sm:-mt-6 sm:text-4xl">
          {script}
        </p>
      ) : null}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 lg:flex-row lg:gap-16">
        <div className="reveal flex-1 text-center lg:text-left">
          <p className="font-display text-2xl tracking-widest text-white uppercase sm:text-3xl">
            Kareem Abdo Hussein
          </p>
          <div className="relative mt-2 inline-block">
            <h1 className="font-display text-yellow text-[22vw] leading-none tracking-wide uppercase drop-shadow-xl sm:text-[9rem] lg:text-[11rem]">
              Portfolio
            </h1>
            <span className="font-display absolute top-1/2 -right-2 hidden -translate-y-1/2 text-3xl tracking-[0.4em] text-white uppercase [writing-mode:vertical-rl] sm:block lg:-right-10">
              2026
            </span>
          </div>
          <p className="mt-6 text-2xl font-light sm:text-3xl">Creative Graphic Designer</p>
          <p className="text-xl font-semibold tracking-wide sm:text-2xl">
            &amp; DIGITAL MARKETING SPECIALIST
          </p>
          <p className="mt-4 text-sm tracking-widest sm:text-base">
            Social Media · Branding · Digital Marketing
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#work"
              className="bg-yellow text-ink font-display rounded-md px-8 py-3 text-lg tracking-wide transition hover:bg-white"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="font-display hover:text-blue-deep rounded-md border-2 border-white px-8 py-3 text-lg tracking-wide text-white transition hover:bg-white"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="reveal shrink-0">
          {/* Frameless portrait: no border, no radius, no shadow. */}
          <img
            src={images.portrait}
            alt="Kareem Abdo Hussein"
            width={1024}
            height={1536}
            className="h-auto w-[28rem] object-contain sm:w-[34rem] lg:w-[38rem]"
          />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <SectionTitle main="About" script="Me" />
      <div dir="rtl" className="font-arabic reveal max-w-4xl space-y-6 text-right">
        <p className="text-2xl leading-relaxed font-bold sm:text-3xl">{aboutParagraphs[0]}</p>
        <p className="text-xl leading-relaxed sm:text-2xl">{aboutParagraphs[1]}</p>
        <p className="text-xl leading-relaxed sm:text-2xl">{aboutParagraphs[2]}</p>
      </div>
      <div dir="rtl" className="font-arabic mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="reveal text-center">
            <p className="font-display text-yellow text-6xl drop-shadow-lg sm:text-7xl">{stat.value}</p>
            <p className="mt-2 text-xl font-semibold text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ring({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 26;
  return (
    <svg viewBox="0 0 64 64" className="h-13 w-13 shrink-0 -rotate-90">
      <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="7" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="var(--brand-yellow)" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${(value / 100) * circumference} ${circumference}`} />
      <text x="32" y="32" textAnchor="middle" dominantBaseline="central" className="fill-white text-xs font-bold" transform="rotate(90 32 32)">{value}%</text>
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <SectionTitle main="My" script="Skills & Expertise" />
      <h3 className="font-display text-yellow reveal mb-6 text-3xl tracking-widest uppercase">Software</h3>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {software.map((item) => (
          <div key={item.name} className="reveal flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <Ring value={item.value} />
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/10">
              <img src={item.icon} alt={`${item.name} icon`} loading="lazy" width={44} height={44} className="h-9 w-9 object-contain drop-shadow-md" />
            </span>
            <p className="text-lg leading-tight font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <h3 className="font-display text-yellow mb-6 text-3xl tracking-widest uppercase">Skills</h3>
          <ul className="grid gap-3 text-lg sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3"><span className="bg-yellow h-2.5 w-2.5 shrink-0 rounded-full" />{skill}</li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <h3 className="font-display text-yellow mb-6 text-3xl tracking-widest uppercase">Language</h3>
          <ul className="space-y-3 text-lg">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center gap-3"><span className="bg-yellow h-2.5 w-2.5 shrink-0 rounded-full" />{lang.name} : {lang.level}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const serviceIcons = {
  "pen-tool": PenTool,
  "pencil-line": PencilLine,
  heart: Heart,
  users: Users,
  "calendar-clock": CalendarClock,
  megaphone: Megaphone,
  printer: Printer,
} as const;

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <SectionTitle main="My" script="Services" />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
          return (
            <div key={service.en} className="reveal flex items-center gap-5 rounded-xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20">
              <span className="bg-yellow text-ink flex h-14 w-14 shrink-0 items-center justify-center rounded-full"><Icon size={26} /></span>
              <div className="flex flex-1 items-center justify-between gap-4">
                <p className="text-lg font-semibold sm:text-xl">{service.en}</p>
                <p dir="rtl" className="font-arabic text-right text-lg font-bold sm:text-xl">{service.ar}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <SectionTitle main="Social Media Designs" script="" />
      <div className="space-y-20">
        {workProjects.map((project, index) => (
          <article key={project.name} className={`reveal flex flex-col gap-8 lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            <div className="lg:w-3/5"><img src={project.image} alt={project.alt} loading="lazy" className="h-auto w-full rounded-2xl object-contain shadow-2xl" /></div>
            <div dir="rtl" className="font-arabic rounded-2xl bg-white/10 p-8 backdrop-blur-sm lg:w-2/5">
              <h3 className="text-yellow text-3xl font-extrabold">اسم الشركة: {project.name}</h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed">
                <li><span className="text-yellow font-bold">المجال: </span>{project.field}</li>
                <li><span className="text-yellow font-bold">البلد: </span>{project.country}</li>
                <li><span className="text-yellow font-bold">مدة العمل: </span><span dir="ltr" className="inline-block">{project.period}</span></li>
                <li><span className="text-yellow font-bold">الخدمات المقدمة: </span>{project.servicesAr}</li>
                <li><span className="text-yellow font-bold">البرامج: </span><span dir="ltr" className="inline-block">{project.tools}</span></li>
              </ul>
              <p className="mt-6 border-t border-white/20 pt-5 text-lg leading-relaxed"><span className="text-yellow font-bold">النتيجة: </span>{project.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Identity() {
  return (
    <section id="identity" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <SectionTitle main="Brand" script="Identity" />
      <div className="space-y-20">
        {brandBoards.map((board) => (
          <article key={board.title} className="reveal">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-yellow text-3xl tracking-wide uppercase sm:text-4xl">{board.title}</h3>
                <p className="mt-1 text-lg font-medium">{board.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">{board.colors.map((color) => (<span key={color} title={color} className="h-8 w-8 rounded-full border-2 border-white shadow" style={{ backgroundColor: color }} />))}</div>
            </div>
            <p className="mb-3 max-w-3xl text-base leading-7">{board.description}</p>
            <p className="mb-6 text-sm tracking-widest uppercase">Typography: {board.typography}</p>
            <img src={board.image} alt={`${board.title} brand identity board`} loading="lazy" className="h-auto w-full rounded-2xl object-contain shadow-2xl" />
          </article>
        ))}
      </div>
    </section>
  );
}

export function Logos() {
  return (
    <section id="logos" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
      <SectionTitle main="Logo Folio" script="" />
      <img src={images.logofolio} alt="Logo folio: Media Hive, Business Hub, The Iris Beauty & Spa, Albehi, Vanir Travel Group, Assoul Mart, Dalida, Milestones, Pac Man Burger" loading="lazy" className="reveal h-auto w-full rounded-2xl object-contain shadow-2xl" />
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone}`, external: false },
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
                <span className="bg-yellow text-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-full"><Icon size={22} /></span>
                <span className="break-all text-lg">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
