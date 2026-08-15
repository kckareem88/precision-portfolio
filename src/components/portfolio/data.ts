import portrait from "@/assets/portrait.png";
import workViaggio from "@/assets/work-viaggio-new.png.asset.json";
import workMaalem from "@/assets/work-maalem.jpg";
import workAlzaer from "@/assets/work-alzaer-new.png.asset.json";
import workVanir from "@/assets/work-vanir.jpg";
import workAgha from "@/assets/work-five-new.png.asset.json";
import workPacman from "@/assets/work-pacman.jpg";
import brandMaalem from "@/assets/brand-maalem.jpg.asset.json";
import brandVanir from "@/assets/brand-vanir.jpg.asset.json";
import brandPacman from "@/assets/brand-pacman.jpg.asset.json";
import logofolio from "@/assets/logofolio.jpg";
import swPhotoshop from "@/assets/sw-photoshop.png.asset.json";
import swIllustrator from "@/assets/sw-illustrator.png.asset.json";
import swIndesign from "@/assets/sw-indesign.png.asset.json";
import swGoogleAds from "@/assets/sw-googleads.png.asset.json";
import swMetaBusiness from "@/assets/sw-metabusiness.png.asset.json";
import swGoogleBusiness from "@/assets/sw-googlebusiness.png.asset.json";
import swCanva from "@/assets/sw-canva.png.asset.json";
import swMetaAds from "@/assets/sw-metaads.png.asset.json";

export const images = {
  portrait,
  logofolio: logofolio,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Identity", href: "#identity" },
  { label: "Logos", href: "#logos" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  phone: "+201116003029",
  whatsappUrl: "https://wa.me/201116003029",
  email: "kckareem88@gmail.com",
  behance: "behance.net/kareemkc",
  behanceUrl: "https://behance.net/kareemkc",
  linkedin: "linkedin.com/in/kareem-abdo",
  linkedinUrl: "https://linkedin.com/in/kareem-abdo",
};

export const aboutParagraphs = [
  "لا اصمم فقط بل احول الافكار إلى هوية بصرية تعكس قيمة العلامة التجارية",
  "و اقدم حلولا إبداعة تشمل التصميمات و إدارة المحتوى و إدارة الحملات الاعلانية الممولة",
  "لتحويل الأفكار إلى علامات تجارية مؤثرة و فعالة و صناعة حضور رقمي قوى يحقق اهداف العملاء",
];

export const stats = [
  { value: "8+", label: "سنوات خبرة" },
  { value: "4+", label: "بلدان مختلفة" },
  { value: "7+", label: "هوية بصرية" },
  { value: "11+", label: "مشروع مكتمل" },
  { value: "27+", label: "شركة و عميل" },
  { value: "5+", label: "مجالات مختلفة" },
  { value: "1000+", label: "تصميم فعلي" },
];

export const software = [
  { name: "Adobe Photoshop", value: 90, icon: swPhotoshop.url },
  { name: "Adobe Illustrator", value: 85, icon: swIllustrator.url },
  { name: "Adobe InDesgin", value: 70, icon: swIndesign.url },
  { name: "Google Ads", value: 90, icon: swGoogleAds.url },
  { name: "Meta Business Suite", value: 90, icon: swMetaBusiness.url },
  { name: "Google Business", value: 85, icon: swGoogleBusiness.url },
  { name: "Canva Design", value: 85, icon: swCanva.url },
  { name: "Meta Ads", value: 90, icon: swMetaAds.url },
];

export const skills = [
  "Social Media Management",
  "Brand Identity Design",
  "Logo Design",
  "Visual Identity",
  "Marketing Strategy",
  "Campaign Management",
  "Content Strategy",
  "Paid Advertising",
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Very Good" },
];

export const services: { icon: string; en: string; ar: string }[] = [
  { icon: "pen-tool", en: "Brand Identity", ar: "بناء العلامة التجارية" },
  { icon: "pencil-line", en: "Logo Design", ar: "تصميم الشعارات" },
  { icon: "heart", en: "Social Media Design", ar: "تصميمات السوشيال ميديا" },
  { icon: "users", en: "Social Media Management", ar: "إدارة منصات التواصل الاجتماعي" },
  { icon: "calendar-clock", en: "Content Planning", ar: "تخطيط المحتوى" },
  { icon: "megaphone", en: "Manage Paid Ads Platforms", ar: "إدارة منصات الإعلانات الممولة" },
  { icon: "printer", en: "Print Design", ar: "تصميم المطبوعات" },
];

export type WorkProject = {
  image: string;
  alt: string;
  name: string;
  field: string;
  country: string;
  period: string;
  servicesAr: string;
  tools: string;
  result: string;
};

export const workProjects: WorkProject[] = [
  {
    image: workViaggio.url,
    alt: "فياچو ترافيل",
    name: "فياچو ترافيل",
    field: "السفر و السياحة",
    country: "الجزائر",
    period: "2021 - 2023",
    servicesAr: "تصميم السوشيال ميديا - الحملات الإعلانية",
    tools: "Photoshop - Illustrator - Meta",
    result:
      "تنفيذ محتوى بصري احترافي يعزز حضور العلامة التجارية على منصات التواصل الاجتماعي",
  },
  {
    image: workVanir,
    alt: "معالم القمم للسفر و السياحة",
    name: "معالم القمم للسفر و السياحة",
    field: "السفر و السياحة",
    country: "السعودية",
    period: "2024 - 2026",
    servicesAr: "تصميم السوشيال ميديا - الحملات الإعلانية - الهوية البصرية",
    tools: "Photoshop - Illustrator - Meta - Google Ads",
    result:
      "تنفيذ هوية تجارية و محتوى بصري احترافي يعزز حضور العلامة التجارية على منصات التواصل الاجتماعي",
  },
  {
    image: workAlzaer.url,
    alt: "الزائر للسفر و السياحة",
    name: "الزائر للسفر و السياحة",
    field: "السفر و السياحة",
    country: "السعودية",
    period: "2023 - 2026",
    servicesAr: "تصميم السوشيال ميديا - الحملات الإعلانية",
    tools: "Photoshop - Meta - Google Ads",
    result:
      "تنفيذ محتوى بصري احترافي يعزز حضور العلامة التجارية على منصات التواصل الاجتماعي",
  },
  {
    image: workVanir,
    alt: "فانير للسفر و السياحة",
    name: "فانير للسفر و السياحة",
    field: "السفر و السياحة",
    country: "مصر",
    period: "2020 - 2022",
    servicesAr: "تصميم السوشيال ميديا - الحملات الإعلانية - الهوية البصرية",
    tools: "Photoshop - Illustrator - Meta - Google Ads",
    result:
      "تنفيذ هوية تجارية و محتوى بصري احترافي يعزز حضور العلامة التجارية على منصات التواصل الاجتماعي",
  },
  {
    image: workAgha.url,
    alt: "أغــا تــــورز",
    name: "أغــا تــــورز",
    field: "السفر و السياحة",
    country: "مصر",
    period: "2019 - 2022",
    servicesAr: "تصميم السوشيال ميديا - الحملات الإعلانية",
    tools: "Photoshop - Meta - Google Ads",
    result:
      "تنفيذ محتوى بصري احترافي يعزز حضور العلامة التجارية على منصات التواصل الاجتماعي",
  },
  {
    image: workPacman,
    alt: "باك مان برجر",
    name: "باك مان برجر",
    field: "المطاعم",
    country: "ليبيا",
    period: "2021 - 2022",
    servicesAr: "تصميم السوشيال ميديا - الهوية البصرية",
    tools: "Photoshop - Illustrator",
    result:
      "تنفيذ هوية تجارية و محتوى بصري احترافي يعزز حضور العلامة التجارية على منصات التواصل الاجتماعي",
  },
];

export type BrandBoard = {
  image: string;
  title: string;
  subtitle: string;
  colors: string[];
  description: string;
  typography: string;
};

export const brandBoards: BrandBoard[] = [
  {
    image: brandMaalem.url,
    title: "Milestones Peaks",
    subtitle: "Travel Agency",
    colors: ["#F26C21", "#132845", "#F5F5F5"],
    description:
      "Full brand identity for a travel and tourism company in Saudi Arabia: primary logo, logo variations, color palette, typography, grid system, stationery and brand applications.",
    typography: "DIN Next LT Arabic · Poppins",
  },
  {
    image: brandVanir.url,
    title: "VANIR TRAVEL GROUP",
    subtitle: "We Plan For Happiness",
    colors: ["#1E73BE", "#F28C00", "#FFFFFF"],
    description:
      "Our logo represents exploration, trust and global connection. The airplane circling the world reflects our commitment to creating unforgettable travel experiences.",
    typography: "Montserrat · Poppins",
  },
  {
    image: brandPacman.url,
    title: "PAC MAN BURGER",
    subtitle: "Burger Restaurant",
    colors: ["#FF9D00", "#0066CC", "#8B4513", "#009F40", "#1A1A1A"],
    description:
      "Pac Man Burger is a fun, bold and memorable burger restaurant brand inspired by the iconic game character. We serve delicious food with a playful twist!",
    typography: "Boombox Extra Bold · Montserrat",
  },
];
