"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/custom/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Skill {
  name?: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  details?: string;
  translateNameKey?: string;
  translateDetailsKey?: string;
}

interface SkillCategory {
  key: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    key: "backend",
    skills: [
      { name: "Python", level: "expert", details: "FastAPI, SQLAlchemy" },
      { name: "Go", level: "expert", details: "stdlib, go-restful, sqlc, mkit" },
      { name: "Java", level: "intermediate" },
      { name: "Node.js", level: "expert", details: "Express" },
      { name: "PHP", level: "intermediate", details: "Symfony" },
      { name: "C", level: "advanced", details: "SDL2" },
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
      { name: "Kubernetes", level: "intermediate", details: "microk8s, Helm" },
      { name: "Docker", level: "intermediate", details: "Docker Compose, multi-stage builds" },
      { name: "AWS", level: "advanced", details: "CloudFormation, EC2, Lambda, S3, Amazon Cognito, ELB, CodeBuild, CodeDeploy" },
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
      { name: "SIEM", level: "advanced", details: "Elastic Suite" },
      { name: "ISO 27001", level: "intermediate" },
      { name: "OWASP Top 10", level: "intermediate" },
      { name: "Snyk / SonarQube", level: "intermediate" },
    ],
  },
  {
    key: "others",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Linux", level: "advanced" },
      { name: "Agile Methodologies", level: "advanced", details: "Scrum, Kanban" },
      { name: "Testing", level: "advanced", details: "Unit Testing, Integration Testing, E2E Testing" },
      { name: "CI/CD", level: "advanced" },
      { name: "RESTful APIs", level: "expert" },
      { name: "GraphQL", level: "intermediate" },
      { name: "gRPC", level: "beginner" },
      { name: "Message Brokers", level: "intermediate", details: "RabbitMQ, NATS" },
      { name: "Firewall", level: "advanced", details: "OPNSense, Sophos UTM9" },
      { name: "Virtualization", level: "intermediate", details: "VMware ESXi" },
      { name: "Monitoring", level: "intermediate", details: "Prometheus, Grafana, Elastic Suite" },
      { name: "Shopify", level: "intermediate", details: "API integration (GraphQL, REST)" },
      { name: "CRM", level: "intermediate", details: "Salesforce, Odoo" },
      { name: "ERP", level: "intermediate", details: "Odoo, Sage X3" },
      { name: "Backup", level: "intermediate", details: "Veeam Backup" },
    ],
  },
  {
    key: "soft",
    skills: [
      { translateNameKey: "soft_details.communication.name", level: "advanced", translateDetailsKey: "soft_details.communication.details" },
      { translateNameKey: "soft_details.teamLeadership.name", level: "advanced", translateDetailsKey: "soft_details.teamLeadership.details" },
      { translateNameKey: "soft_details.problemSolving.name", level: "expert", translateDetailsKey: "soft_details.problemSolving.details" },
      { translateNameKey: "soft_details.timeManagement.name", level: "advanced", translateDetailsKey: "soft_details.timeManagement.details" },
      { translateNameKey: "soft_details.adaptability.name", level: "expert", translateDetailsKey: "soft_details.adaptability.details" },
      { translateNameKey: "soft_details.collaboration.name", level: "advanced", translateDetailsKey: "soft_details.collaboration.details" },
      { translateNameKey: "soft_details.criticalThinking.name", level: "expert", translateDetailsKey: "soft_details.criticalThinking.details" },
      { translateNameKey: "soft_details.resilience.name", level: "expert", translateDetailsKey: "soft_details.resilience.details" },
    ],
  }
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
                      
                      <span className="font-medium text-sm">
                        {skill.translateNameKey ? t(skill.translateNameKey) : skill.name}
                      </span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${levelColor[skill.level]}`}
                      >
                        {t(`levels.${skill.level}`)}
                      </Badge>
                    </div>
                    {skill.details && (
                      <p className="text-xs text-muted-foreground">
                        {skill.details}
                      </p>
                    )}
                    {skill.translateDetailsKey && (
                      <p className="text-xs text-muted-foreground">
                        {t(skill.translateDetailsKey)}
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
