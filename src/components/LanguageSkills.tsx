import type { Language } from '../content/portfolio';
import { languageSkills } from '../content/portfolio';
import SectionHeading from './SectionHeading';

export default function LanguageSkills({ language, copy }: { language: Language; copy: { eyebrow: string; title: string; subtitle: string } }) {
  return <section id="languages" aria-label={copy.eyebrow.slice(5)} className="section languages"><SectionHeading {...copy} /><div className="language-grid">{languageSkills.map((skill, index) => <article className="language-card" key={`${skill.name.en}-${index}`}><div className="language-line"><span>{String(index + 1).padStart(2, '0')}</span><strong>{skill.name[language]}</strong><b>{skill.level[language]}</b></div><div className="meter"><i style={{ width: `${skill.value}%` }} /></div><p>{skill.note[language]}</p></article>)}</div></section>;
}
