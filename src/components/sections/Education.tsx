"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { GraduationCap, MapPin } from "lucide-react";

const degrees = ["m2", "bachelor"] as const;

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
          {degrees.map((key, idx) => (
            <AnimatedSection key={key} delay={idx * 0.1}>
              <div className="glass rounded-xl p-6 h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {t(`${key}.year`)}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{t(`${key}.degree`)}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {t(`${key}.school`)}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {t(`${key}.location`)}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
