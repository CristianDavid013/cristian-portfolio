import type { Language } from '../content/portfolio';
import { skillGroups } from '../content/portfolio';
import SectionHeading from './SectionHeading';

export default function TechSkills({ language, copy }: { language: Language; copy: { eyebrow: string; title: string; subtitle: string } }) {
  return <section id="technology" aria-label={copy.eyebrow.slice(5)} className="section tech-section"><SectionHeading {...copy} /><div className="skill-groups">{skillGroups.map((group, index) => <article className="skill-group" key={group.title.en}><span>0{index + 1}</span><h3>{group.title[language]}</h3><ul>{group.items.map(item => <li key={item}>{item}<i>↗</i></li>)}</ul></article>)}</div></section>;
}
