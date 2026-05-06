import { useEffect, useState } from "react";

export const useParallaxFade = (speed = 0.3) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-parallax]");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // progress: 0 (below screen) → 1 (fully in view)
        const progress = 1 - rect.top / windowHeight;

        const clamped = Math.max(0, Math.min(1, progress));

        const translateY = (1 - clamped) * 50 * speed;
        const opacity = clamped;

        el.style.transform = `translateY(${translateY}px)`;
        el.style.opacity = opacity;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return style;
};