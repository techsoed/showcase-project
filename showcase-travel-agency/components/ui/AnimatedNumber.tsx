"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericMatch = value.match(/[\d,\.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numericString = numericMatch[0];
    const isFloat = numericString.includes(".");
    const targetNumber = parseFloat(numericString.replace(/,/g, ""));
    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericString.length);

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = targetNumber * easeProgress;

      let formattedNumber: string;
      if (isFloat) {
        formattedNumber = currentNumber.toFixed(1);
      } else {
        formattedNumber = Math.floor(currentNumber).toLocaleString("en-US");
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value); // Ensure exact final string
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, value]);

  return <span ref={elementRef}>{displayValue}</span>;
}
