import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "metadata" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Victor Leveneur",
    url: `https://vleveneur.com/${locale}`,
    jobTitle: t("title").split(" - ")[1],
    description: t("description"),
    email: "victor.leveneur@proton.me",
    sameAs: [
      "https://github.com/b0rn",
      "https://gitlab.com/b0rn",
      "https://www.linkedin.com/in/victorleveneura1",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Université de Grenoble-Alpes",
      },
      {
        "@type": "EducationalOrganization",
        name: "Université de la Réunion",
      },
    ],
    knowsLanguage: ["fr", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
