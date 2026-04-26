import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";
const Instagram = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Facebook = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Youtube = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2 8.7 2 12 2 12s0 3.3.5 4.9a3 3 0 0 0 2 2C6.1 19.5 12 19.5 12 19.5s5.9 0 7.5-.6a3 3 0 0 0 2-2c.5-1.6.5-4.9.5-4.9s0-3.3-.5-4.9a3 3 0 0 0-2-2C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.5.6a3 3 0 0 0-2 2z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>;
const Globe = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function FooterSection({ config, locale }: Props) {
  return (
    <footer id="kontak" className="border-t border-black/10 bg-black/5 px-4 py-10 sm:px-6 lg:px-8">
      <RevealOnScroll
        delayMs={170}
        className="mx-auto grid w-full max-w-6xl gap-6 text-base sm:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <p className="text-lg font-semibold">{config.brand.name}</p>
          <p className="mt-2 text-black/70">{config.brand.tagline}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === "id" ? "Alamat" : "Address"}</p>
          <p className="mt-2 text-black/70">{config.contact.address}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === "id" ? "Kontak" : "Contact"}</p>
          <p className="mt-2 text-black/70">{config.contact.phone}</p>
          <p className="text-black/70">{config.contact.email}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === "id" ? "Sosial Media" : "Social Media"}</p>
          <div className="mt-3 flex items-center gap-4">
            {config.contact.socialLinks.map((social) => {
              const l = social.label.toLowerCase();
              let Icon = Globe;
              if (l.includes("instagram")) Icon = Instagram;
              if (l.includes("facebook") || l.includes("fb")) Icon = Facebook;
              if (l.includes("twitter") || l.includes("x")) Icon = Twitter;
              if (l.includes("youtube") || l.includes("yt")) Icon = Youtube;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-black transition hover:opacity-70"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
