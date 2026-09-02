import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "About",
  description: "The people behind Ark Team.",
  openGraph: {
    title: "Ark Team | About",
    description: "The people behind Ark Team.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pt-20 pb-16 sm:px-8 sm:pt-28">
        <Eyebrow>About</Eyebrow>
        <h1 className="text-[34px] font-normal leading-[1.16] tracking-[-0.015em] sm:text-[46px]">
          More about us is coming.
        </h1>
        <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary sm:text-xl">
          We are still writing this page. Tell us about your business and we
          will be in touch.
        </p>
      </section>
      <ContactCta heading="Talk to us about your business." />
    </>
  );
}
