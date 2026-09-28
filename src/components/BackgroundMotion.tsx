import { useEffect, useRef } from 'react';

export default function BackgroundMotion({ reducedMotion }: { reducedMotion: boolean }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const move = (event: PointerEvent) => {
      element.current?.style.setProperty('--pointer-x', `${event.clientX / window.innerWidth}`);
      element.current?.style.setProperty('--pointer-y', `${event.clientY / window.innerHeight}`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [reducedMotion]);
  return <div ref={element} data-testid="ambient-background" data-motion={reducedMotion ? 'reduced' : 'full'} className="ambient" aria-hidden="true"><i /><i /><i /><b /><b /><b /></div>;
}
