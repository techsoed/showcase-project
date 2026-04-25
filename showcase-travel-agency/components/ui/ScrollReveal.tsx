"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  yOffset?: number;
};

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  yOffset = 24,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(target);
        }
      },
      {
        root: null,
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] duration-700 will-change-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${className ?? ""}`}
      style={{
        transitionDelay: `${delayMs}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0,0,0)" : `translate3d(0,${yOffset}px,0)`,
        filter: isVisible ? "blur(0px)" : "blur(6px)",
      }}
    >
      {children}
    </div>
  );
}
