import type { Language } from '../content/portfolio';
import SectionHeading from './SectionHeading';

export default function Contact({ copy }: { language: Language; copy: { eyebrow: string; title: string; body: string; emailLabel: string; phoneLabel: string; location: string } }) {
  return <footer id="contact" className="contact"><SectionHeading eyebrow={copy.eyebrow} title={copy.title} /><p className="contact-intro">{copy.body}</p><div className="contact-links"><a href="mailto:kristian0930@hotmail.com"><span>{copy.emailLabel}</span>kristian0930@hotmail.com</a><a href="tel:+573024215737"><span>{copy.phoneLabel}</span>+57 302 421 5737</a><p>{copy.location}</p></div><div className="contact-bottom"><span>© {new Date().getFullYear()} Cristian David Lozano</span><a href="#top">BACK TO TOP ↑</a></div></footer>;
}
