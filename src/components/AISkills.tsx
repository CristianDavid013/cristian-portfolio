import type { Language } from '../content/portfolio';
import { aiSkillItems } from '../content/portfolio';
import SectionHeading from './SectionHeading';

export default function AISkills({ language, copy }: { language: Language; copy: { eyebrow: string; title: string; subtitle: string } }) {
  return (
    <section id="ai-skills" aria-label={copy.eyebrow.slice(5)} className="section tech-section">
      <SectionHeading {...copy} />
      <div className="skill-groups">
        {aiSkillItems.map((item, index) => (
          <article className="skill-group" key={item.title.en}>
            <span>0{index + 1}</span>
            <h3>{item.title[language]}</h3>
            <p style={{ marginTop: '1rem', color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {item.description[language]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
