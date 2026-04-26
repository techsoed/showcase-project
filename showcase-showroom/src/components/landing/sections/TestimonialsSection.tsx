import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import { getStars } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function TestimonialsSection({ config, locale }: Props) {
  const title = locale === "id" ? config.mainContent.sectionTitles.testimonials : "Customer Reviews";

  const testimonialsList =
    locale === "id"
      ? config.mainContent.testimonials
      : [
          { name: "Rizki Setiawan", comment: "Fast service, unit matches the photo, and credit process is assisted until completion.", rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
          { name: "Nadia Putri", comment: "Clean showroom, informative admin, and transparent about car conditions.", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
          { name: "Andi Pratama", comment: "Reasonable price, complete documents, car is ready for daily use.", rating: 4, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
        ];

  return (
    <section id="testimoni" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        </RevealOnScroll>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {testimonialsList.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.name} delayMs={index * 100} className="min-w-[280px] flex-1 h-full">
              <article className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="flex-1">
                  <p className="text-lg text-black">{getStars(testimonial.rating)}</p>
                  <p className="mt-3 text-base leading-7 text-black/70">“{testimonial.comment}”</p>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {testimonial.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover grayscale"
                    />
                  ) : null}
                  <p className="text-base font-semibold">{testimonial.name}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
