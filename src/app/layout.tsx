import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Leveneur - Cybersecurity Engineer & Full-Stack Developer",
  description:
    "Portfolio of Victor Leveneur, a Cybersecurity Engineer and Full-Stack Developer specializing in secure, scalable applications with clean architecture.",
  openGraph: {
    title: "Victor Leveneur - Cybersecurity Engineer & Full-Stack Developer",
    description:
      "Building secure, scalable applications with clean architecture and production-grade engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
