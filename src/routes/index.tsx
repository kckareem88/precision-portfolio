import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import {
  About,
  Contact,
  Hero,
  Identity,
  Logos,
  Services,
  Skills,
  Work,
} from "@/components/portfolio/Sections";
import { useReveal } from "@/components/portfolio/useReveal";

const title = "Kareem Abdo Hussein — Portfolio 2026";
const description =
  "Creative Graphic Designer & Digital Marketing Specialist. Social Media · Branding · Digital Marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Work />
        <Identity />
        <Logos />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
