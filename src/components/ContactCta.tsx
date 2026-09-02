import Link from "next/link";

export function ContactCta({ heading }: { heading: string }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-20 sm:px-8">
        <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[32px]">
          {heading}
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-accent px-7 py-3.5 text-base text-surface transition-opacity hover:opacity-90"
        >
          Talk to us about your business
        </Link>
      </div>
    </section>
  );
}
