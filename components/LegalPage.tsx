import type { ReactNode } from "react";

export default function LegalPage({
  eyebrow,
  title,
  updated = "18 November 2026",
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <span className="section-label">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        <p className="legal-updated">Last updated: {updated}</p>
        <article className="legal-content">{children}</article>
      </div>
    </main>
  );
}
