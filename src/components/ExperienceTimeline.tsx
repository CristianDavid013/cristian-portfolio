import { useState } from 'react';
import type { Experience, Language } from '../content/portfolio';
import SectionHeading from './SectionHeading';

export default function ExperienceTimeline({ language, copy, entries }: { language: Language; copy: { eyebrow: string; title: string; subtitle: string }; entries: Experience[] }) {
  const [active, setActive] = useState(0);
  return <section id="experience" aria-label={copy.eyebrow.slice(5)} className="section experience"><SectionHeading {...copy} /><div className="timeline">{entries.map((entry, index) => <article className={active === index ? 'timeline-item active' : 'timeline-item'} key={`${entry.company}-${entry.period}`}><button type="button" onClick={() => setActive(index)} aria-expanded={active === index} aria-controls={`experience-${index}`}><span className="timeline-dot" /><time>{entry.period}</time><strong>{entry.company}</strong><i>{active === index ? '−' : '+'}</i></button><div id={`experience-${index}`} className="timeline-detail" hidden={active !== index}><h3>{entry.role[language]}</h3><p>{entry.description[language]}</p><ul>{entry.highlights.map(highlight => <li key={highlight.en}>{highlight[language]}</li>)}</ul></div></article>)}</div></section>;
}
