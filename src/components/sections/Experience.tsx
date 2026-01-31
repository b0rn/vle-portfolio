"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = ["blackpearl", "lynred", "rpa", "lim"] as const;

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((key, idx) => (
              <AnimatedSection key={key} delay={idx * 0.15}>
                <div
                  className={`relative flex items-start gap-8 ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-6 ring-4 ring-background z-10" />

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card */}
                  <div className="ml-12 lg:ml-0 lg:w-1/2">
                    <div className="glass rounded-xl p-6 hover:scale-[1.01] transition-transform duration-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {t(`${key}.company`)}
                          </h3>
                          <p className="text-sm text-primary">
                            {t(`${key}.role`)}
                          </p>
                        </div>
                        <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
                          {t(`${key}.period`)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(`${key}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {t(`${key}.tech`)
                          .split(", ")
                          .map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
