"use client";

import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon, LinkedInIcon } from "@/components/custom/Icons";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/b0rn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/victorleveneura1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
