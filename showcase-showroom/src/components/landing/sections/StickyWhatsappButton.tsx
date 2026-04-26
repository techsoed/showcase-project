type Props = {
  whatsappHref: string;
};

export default function StickyWhatsappButton({ whatsappHref }: Props) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="pressable fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--wl-black)] px-5 text-base font-semibold text-white shadow-lg md:hidden"
    >
      WhatsApp
    </a>
  );
}
