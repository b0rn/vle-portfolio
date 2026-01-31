"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock } from "lucide-react";
import { GitHubIcon } from "@/components/custom/Icons";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  key: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  comingSoon?: boolean;
  screenshotUrl?: string;
}

const projects: Project[] = [
  {
    key: "spa",
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
    ],
    liveUrl: "https://spa.chronolobe.app",
    githubUrl: "https://github.com/b0rn/simple-portfolio-mgt",
    featured: true,
    screenshotUrl: "/projects/spa.png",
  },
  {
    key: "chronolobe",
    techStack: [
      "Next.js",
      "TypeScript",
      "Golang",
      "PostgreSQL",
      "Typesense",
      "Docker",
      "Github Actions",
    ],
    liveUrl: "https://chronolobe.app",
    screenshotUrl: "/projects/chronolobe.png",
    featured: true,
  },
];

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.key} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`glass rounded-xl overflow-hidden h-full flex flex-col ${
                  project.featured
                    ? "md:col-span-2 lg:col-span-2 border-primary/20"
                    : ""
                }`}
              >
                {/* Gradient placeholder for screenshot */}
                <div
                  className={`${
                    project.featured ? "h-48" : "h-36"
                  } bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent relative`}
                >
                  {project.screenshotUrl && (
                    <Image
                      src={project.screenshotUrl}
                      alt={t(`${project.key}.title`)}
                      className="w-full h-full object-cover"
                      width={1000}
                      height={1000}
                    />
                  )}
                  {project.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Badge
                        variant="outline"
                        className="bg-background/80 backdrop-blur text-muted-foreground"
                      >
                        <Clock className="mr-1 h-3 w-3" />
                        {t("comingSoon")}
                      </Badge>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-1">
                    {t(`${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {t(`${project.key}.tagline`)}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {t(`${project.key}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {!project.comingSoon && (
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            {t("viewLive")}
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GitHubIcon className="mr-1 h-3 w-3" />
                            {t("viewCode")}
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
