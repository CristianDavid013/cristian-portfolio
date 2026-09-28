import { content, experiences } from './content/portfolio';
import { useLanguage } from './hooks/useLanguage';
import { useReducedMotion } from './hooks/useReducedMotion';
import BackgroundMotion from './components/BackgroundMotion';
import Header from './components/Header';
import Hero from './components/Hero';
import LanguageSkills from './components/LanguageSkills';
import TechSkills from './components/TechSkills';
import AISkills from './components/AISkills';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const { language, setLanguage } = useLanguage();
  const reducedMotion = useReducedMotion();
  const copy = content[language];
  return <div className="app"><BackgroundMotion reducedMotion={reducedMotion} /><Header language={language} setLanguage={setLanguage} nav={copy.nav} /><main><Hero availability={copy.availability} title={copy.heroTitle} lead={copy.heroLead} actions={copy.actions} /><section id="profile" aria-label={copy.profile.eyebrow.slice(5)} className="section profile"><p>{copy.profile.eyebrow}</p><div><h2>{copy.profile.title}</h2><p>{copy.profile.body}</p></div></section><LanguageSkills language={language} copy={copy.languages} /><TechSkills language={language} copy={copy.tech} /><AISkills language={language} copy={copy.aiSkills} /><ExperienceTimeline language={language} copy={copy.experience} entries={experiences} /><Education language={language} copy={copy.education} /></main><Contact language={language} copy={copy.contact} /></div>;
}
