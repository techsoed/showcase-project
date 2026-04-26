"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function FaqSection({ config, locale }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const title = locale === "id" ? "Tanya Jawab (FAQ)" : "Frequently Asked Questions";

  const faqList =
    locale === "id"
      ? config.mainContent.faq
      : [
          {
            question: "Can I apply for credit with an out-of-town ID card?",
            answer: "Yes, as long as you reside or work within our leasing partners' coverage area. Our team will assist with the checking and administration process.",
          },
          {
            question: "Is the Down Payment (DP) negotiable?",
            answer: "Certainly. We provide various DP packages ranging from the lowest minimum to the lightest installment according to your budget.",
          },
          {
            question: "How long is the credit approval process?",
            answer: "It usually takes 1-3 working days after complete documents are received by the leasing company.",
          },
          {
            question: "Is there a warranty after purchase?",
            answer: "Yes, we provide a 30-day engine and transmission warranty for every unit we sell, plus a money-back guarantee if the documents are invalid.",
          },
        ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 py-10 sm:px-6 lg:px-8 bg-black/5">
      <div className="mx-auto w-full max-w-3xl">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center">{title}</h2>
        </RevealOnScroll>
        <div className="mt-8 flex flex-col gap-3">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <RevealOnScroll key={item.question} delayMs={index * 100}>
                <div
                  className="rounded-2xl border border-black/10 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-base focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-black/70 leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
