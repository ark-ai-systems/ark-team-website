import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { ServiceLevelsDiagram } from "@/components/ServiceLevelsDiagram";

const description =
  "Three levels of service, built to match how far you want to go. Start where you are today and move up whenever you are ready.";

export const metadata: Metadata = {
  title: "Services",
  description,
  openGraph: {
    title: "Ark Team | Services",
    description,
    images: ["/og-image.png"],
  },
};

const levels = [
  {
    name: "Essential",
    tagline: "ARKai, set up and ready for your team.",
    body: "Ark Team configures ARKai around your company, connects it to your files and records, and hands your team a working environment on day one. Your people get the shared space, the task library, and results already shaped by your business, at a fraction of what building the same capability would cost.",
  },
  {
    name: "Advanced",
    tagline: "Adds deep integration with the work your business actually does.",
    body: "Ark Team goes into your business output, your tasks, and your data, then builds ARKai around the specific jobs your company performs. Your team gets tasks designed for their real jobs and hands-on guidance while they learn to use them.",
  },
  {
    name: "Complete",
    tagline:
      "Adds expertise inside your team and a business built to run AI-first.",
    body: "Ark Team works directly with your employees to build genuine AI expertise across your staff. We redesign how the work gets done around what AI now makes possible, and stay with you while your team and your work transform to AI-first.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 pt-20 pb-12 sm:px-8 sm:pt-28">
        <h1 className="text-[32px] font-normal leading-[1.2] tracking-[-0.015em] sm:text-[42px]">
          Three levels of service, built to match how far you want to go.
        </h1>
        <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary sm:text-xl">
          Ark Team offers multiple service levels to align with and support
          your business needs. Start where you are today and move up
          whenever you are ready.
        </p>
      </section>

      <section className="px-6 pb-16 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <ServiceLevelsDiagram />
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-14 px-6 py-16 sm:px-8">
        {levels.map((level) => (
          <div key={level.name} className="flex flex-col gap-4">
            <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
              {level.name}
            </h2>
            <p className="text-xl font-semibold tracking-[-0.01em] text-text sm:text-[22px]">
              {level.tagline}
            </p>
            <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary">
              {level.body}
            </p>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-20 sm:px-8">
          <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
            Redesign the work itself, beyond the pieces you hand to AI.
          </h2>
          <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary">
            Most companies pass pieces of a job to AI and leave the job
            itself unchanged. The real gain comes from rethinking how the
            work is shaped in the first place, once AI is part of how your
            team operates. That takes people who have done it before,
            working alongside the people who know your business.
          </p>
          <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary">
            Each level goes further. At Essential your team has the tools.
            At Advanced we rebuild your tasks around your real jobs. At
            Complete we redesign the work itself with your people, so your
            business runs on a model built for AI rather than one adapted to
            it.
          </p>
        </div>
      </section>

      <ContactCta heading="Talk to us about your business." />
    </>
  );
}
