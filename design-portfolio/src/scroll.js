import { useEffect, useState } from 'react';

export default function Scroll(ids = []) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const nearest = visible[0];
          setActiveId(nearest.target.id);
        }
      },
      {
        rootMargin: '0px 0px -70% 0px', // triggers when heading is top-ish
        threshold: 0.1,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
