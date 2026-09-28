export default function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="section-heading"><p>{eyebrow}</p><h2>{title}</h2>{subtitle && <span>{subtitle}</span>}</div>;
}
