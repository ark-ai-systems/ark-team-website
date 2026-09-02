import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

const description =
  "Tell us a little about your company and we will reach out with what Ark Team can do for you.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: "Ark Team | Contact",
    description,
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-[640px] flex-col gap-10 px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-4">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-[34px] font-normal leading-[1.16] tracking-[-0.015em] sm:text-[40px]">
          Talk to us about your business.
        </h1>
        <p className="text-lg leading-[1.62] text-text-secondary">
          Tell us a little about your company and we will reach out with what
          Ark Team can do for you.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
