"use client";

import { useTranslations, useLocale } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { GitHubIcon, GitLabIcon, LinkedInIcon } from "@/components/custom/Icons";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="lg" asChild className="px-8 cursor-pointer">
              <a href="mailto:contact@vleveneur.com">
                <Mail className="mr-2 h-4 w-4" />
                {t("email")}
              </a>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            {[
              {
                href: "https://github.com/b0rn",
                icon: GitHubIcon,
                label: "GitHub",
              },
              {
                href: "https://gitlab.com/b0rn",
                icon: GitLabIcon,
                label: "GitLab",
              },
              {
                href: "https://www.linkedin.com/in/victorleveneura1",
                icon: LinkedInIcon,
                label: "LinkedIn",
              },
            ].map(({ href, icon: Icon, label }) => (
              <Button key={label} variant="ghost" size="icon" asChild>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
