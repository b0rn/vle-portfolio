"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { GraduationCap, MapPin, ExternalLink } from "lucide-react";

const degrees: {
  key: string;
  link: string;
}[] = [
    {
      key: "m2",
      link: "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-informatique-IAQK9B8Z/parcours-cybersecurite-et-informatique-legale-2e-annee-IZ9WIUT6.html"
    },
    {
      key: "bachelor",
      link: "https://www.univ-reunion.fr/formations/2004/"
    },
  ];

export function Education() {
  const t = useTranslations("education");

  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {degrees.map((degree, idx) => (
            <AnimatedSection key={degree.key} delay={idx * 0.1}>
              <div className="glass rounded-xl p-6 h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {t(`${degree.key}.year`)}
                  </span>
                </div>
                <a
                  href={degree.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold mb-2 hover:text-primary transition-colors"
                >
                  {t(`${degree.key}.degree`)}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
                <p className="text-sm text-muted-foreground mb-1">
                  {t(`${degree.key}.school`)}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {t(`${degree.key}.location`)}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
