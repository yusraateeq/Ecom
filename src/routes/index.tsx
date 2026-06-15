import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gifto — Customized Gifts & Printing Studio" },
      { name: "description", content: "Premium customized mugs, bottles, keychains, pens, award shields, t-shirts, mobile covers, corporate gifts and laser engraving." },
      { property: "og:title", content: "Gifto — Customized Gifts & Printing Studio" },
      { property: "og:description", content: "Premium customized gifts and laser engraving for individuals and brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
