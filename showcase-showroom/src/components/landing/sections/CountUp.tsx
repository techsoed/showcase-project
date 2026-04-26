"use client";

import { useEffect, useState, useRef } from "react";

type Props = {
  value: string;
  durationMs?: number;
  className?: string;
};

export default function CountUp({ value, durationMs = 2000, className = "" }: Props) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse the input value into prefix, numeric part, and suffix
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  
  const prefix = match ? match[1] : "";
  const numericStr = match ? match[2] : "";
  const suffix = match ? match[3] : "";
  const isNumeric = !!match;
  const targetNumber = isNumeric ? parseFloat(numericStr) : 0;
  const hasDecimals = isNumeric && numericStr.includes(".");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !isNumeric) {
      if (!isNumeric) setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      
      // Use easeOutQuart for a smooth deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentNumber = easeProgress * targetNumber;

      let formattedNumber = "";
      if (hasDecimals) {
        // Find how many decimal places the original number had
        const decimals = numericStr.split(".")[1]?.length || 1;
        formattedNumber = currentNumber.toFixed(decimals);
      } else {
        formattedNumber = Math.floor(currentNumber).toString();
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value); // Ensure exact final value
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, isNumeric, targetNumber, durationMs, hasDecimals, numericStr, prefix, suffix, value]);

  return (
    <span ref={elementRef} className={className}>
      {isNumeric && isVisible ? displayValue : isNumeric ? `${prefix}0${suffix}` : value}
    </span>
  );
}
