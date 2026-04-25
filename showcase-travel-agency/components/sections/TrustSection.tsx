import { ClockIcon, ShieldIcon, StarIcon, UsersIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { TrustStat } from "@/lib/site-config";

type TrustSectionProps = {
  stats: TrustStat[];
};

const iconMap = {
  star: StarIcon,
  users: UsersIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
};

export function TrustSection({ stats }: TrustSectionProps) {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <ScrollReveal key={`${item.label}-${item.value}`} delayMs={index * 55} yOffset={18}>
                <article className="rounded-xl border border-zinc-200 bg-[var(--bg-soft)] p-4">
                  <Icon className="mb-3 h-6 w-6 text-zinc-700" />
                  <p className="text-xl font-semibold text-[var(--text-main)]">
                    <AnimatedNumber value={item.value} />
                  </p>
                  <p className="mt-1 text-base text-zinc-700">{item.label}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
