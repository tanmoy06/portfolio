// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe the element and all its .reveal children
    const reveals = el.querySelectorAll('.reveal');
    reveals.forEach((r) => observer.observe(r));

    // Also observe root if it has reveal class
    if (el.classList.contains('reveal')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
