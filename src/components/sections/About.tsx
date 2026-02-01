"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { Code, Server, Languages, Lock } from "lucide-react";

const stats = [
  { key: "experience", valueKey: "experienceValue", icon: Code },
  { key: "lines", valueKey: "linesValue", icon: Languages },
  { key: "headOfIt", valueKey: "headOfItValue", icon: Server },
  { key: "security", valueKey: "securityValue", icon: Lock },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text text-center">
            {t("title")}
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex justify-center mb-12">
            <Image
              src="/vle.jpeg"
              alt="Victor Leveneura"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ key, valueKey, icon: Icon }) => (
                <div
                  key={key}
                  className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="h-6 w-6 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {t(`stats.${valueKey}`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`stats.${key}`)}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
