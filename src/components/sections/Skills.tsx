"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  details?: string;
}

interface SkillCategory {
  key: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    key: "backend",
    skills: [
      { name: "Python", level: "expert", details: "FastAPI, Django, Flask, SQLAlchemy" },
      { name: "Go", level: "expert", details: "stdlib, gin, sqlc" },
      { name: "Java", level: "intermediate", details: "Spring Boot, Hibernate" },
      { name: "Node.js", level: "expert", details: "Fastify, Express, NestJS" },
      { name: "PHP", level: "intermediate", details: "Laravel, Symfony" },
      { name: "C", level: "intermediate", details: "SDL2" },
      { name: "C++", level: "intermediate", details: "OpenGL" },
    ],
  },
  {
    key: "frontend",
    skills: [
      { name: "TypeScript", level: "expert" },
      { name: "React / Next.js", level: "intermediate", details: "App Router, RSC" },
      { name: "React Native", level: "intermediate", details: "Expo, React Navigation" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "TanStack Query", level: "intermediate" },
    ],
  },
  {
    key: "devops",
    skills: [
      { name: "Kubernetes", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
      { name: "AWS", level: "intermediate", details: "EC2, Lambda, S3, Amazon Cognito, ELB, CodeBuild, CodeDeploy" },
      { name: "GitHub Actions", level: "advanced" },
    ],
  },
  {
    key: "databases",
    skills: [
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Redis", level: "beginner" },
      { name: "MySQL", level: "intermediate" },
    ],
  },
  {
    key: "security",
    skills: [
      { name: "SIEM", level: "advanced", details : "Elastic Suite" },
      { name: "ISO 27001", level: "intermediate" },
      { name: "OWASP Top 10", level: "intermediate" },
      { name: "Snyk / SonarQube", level: "intermediate" },
    ],
  },
];

const levelColor = {
  expert: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  advanced: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  intermediate: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  beginner: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection key={category.key} delay={catIdx * 0.1}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {t(category.key)}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.05 }}
                    className="glass rounded-lg p-4 hover:scale-[1.02] transition-transform duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${levelColor[skill.level]}`}
                      >
                        {t(skill.level)}
                      </Badge>
                    </div>
                    {skill.details && (
                      <p className="text-xs text-muted-foreground">
                        {skill.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
