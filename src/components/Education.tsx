import type { Language } from '../content/portfolio';
import { education } from '../content/portfolio';
import SectionHeading from './SectionHeading';

export default function Education({ language, copy }: { language: Language; copy: { eyebrow: string; title: string; subtitle: string } }) {
  return <section id="education" aria-label={copy.eyebrow.slice(5)} className="section education"><SectionHeading {...copy} /><div className="education-list">{education.map(item => <article key={`${item.date}-${item.school}`}><time>{item.date}</time><div><p>{item.kind[language]}</p><h3>{item.program[language]}</h3><span>{item.school}</span></div><b>↗</b></article>)}</div></section>;
}
