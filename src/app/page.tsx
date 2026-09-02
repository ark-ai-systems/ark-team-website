import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactCta } from "@/components/ContactCta";

const description =
  "ARKai is your team of experts. Get back a response checked for mistakes, checked for anything that isn't true, and checked against how your company already works.";

export const metadata: Metadata = {
  title: "AI expertise for your whole team",
  description,
  openGraph: {
    title: "Ark Team | AI expertise for your whole team",
    description,
    images: ["/og-image.png"],
  },
};

const pillars = [
  {
    eyebrow: "Built by AI experts",
    heading: "Quality checks and proven methods run behind every task.",
    body: "ARKai is an AI work environment with expert best practices built into everything it does. Every task runs through multiple leading AI models, gets checked for weak spots and mistakes, and follows a proven process built to get you a great result, every time. That work is already done and shared across every company we serve, which is what puts it within reach.",
  },
  {
    eyebrow: "Trained on your business",
    heading: "Your customers, your files, your processes.",
    body: "ARKai learns from your customer data, your work, and your team's own materials. Every answer reflects your voice, your customers, and the way your company operates. Your whole team draws on that same knowledge, so what one person learns is there for everyone.",
  },
  {
    eyebrow: "Backed by real people",
    heading:
      "Ark Team works with you to build real AI expertise inside your company.",
    body: "When you're ready, our team works directly with your employees so they can get more from ARKai every day. We help your team reimagine everyday tasks so AI does real work from the start, and guide them through adopting new ways of working, every step of the way.",
  },
  {
    eyebrow: "Secure by default",
    heading: "Your data stays separate, and stays yours.",
    body: "ARKai never trains on your data, and your information never mixes with any other company's. You decide who on your team can see what, and nothing leaves your hands until someone on your team approves it.",
  },
  {
    eyebrow: "Costs less than building it",
    heading: "You get the result without building the team.",
    body: "Hiring the right people, training them, and building tested processes for every task would take months and a team most companies don't have. ARKai gives you that same result already built, ready the day you start.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pt-20 pb-16 sm:px-8 sm:pt-28">
        <h1 className="text-[34px] font-normal leading-[1.16] tracking-[-0.015em] sm:text-[46px]">
          ARKai is your team of experts.
        </h1>
        <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary sm:text-xl">
          Your team opens ARKai, picks the task they need done, and gets
          back a response checked for mistakes, checked for anything that
          isn't true, and checked against how your company already works.
          ARKai gives you that expertise without the cost of building it
          yourself.
        </p>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16 sm:px-8">
        {pillars.map((pillar) => (
          <div key={pillar.eyebrow} className="flex flex-col gap-4">
            <Eyebrow>{pillar.eyebrow}</Eyebrow>
            <h2 className="text-2xl font-normal leading-snug tracking-[-0.015em] sm:text-[28px]">
              {pillar.heading}
            </h2>
            <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary">
              {pillar.body}
            </p>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20 sm:px-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Who built this</Eyebrow>
            <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
              Built by people who have done this at scale.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-[1.62] text-text-secondary">
            <p>
              Rachel Karlin transformed a multi-continent organization at
              Microsoft Security into an AI-first operation, redesigning how
              hundreds of people worked rather than handing them tools.
            </p>
            <p>
              Avner Engel runs a healthcare marketing company. He built AI
              into his own operations and grew his capacity to take on more
              clients without hiring more staff.
            </p>
            <p>
              Kevin Cheney is a programmer and a professional poker player who
              built his career across multiple cryptocurrency startups.
            </p>
            <p>
              We built ARKai because we watched businesses buy AI and get
              very little from it.
            </p>
          </div>
          <Link
            href="/about"
            className="font-mono text-sm uppercase tracking-[0.14em] text-accent hover:text-text"
          >
            Read more about us
          </Link>
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-4">
          <Eyebrow>Proof</Eyebrow>
          <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
            See it for yourself.
          </h2>
        </div>
        <div className="flex aspect-video w-full items-center justify-center border border-border bg-surface">
          <span className="font-mono text-sm uppercase tracking-[0.14em] text-text-muted">
            Video coming soon
          </span>
        </div>
        <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary">
          Watch the same task done three ways: free AI, expensive AI, and
          ARKai. Same task. Very different results.
        </p>
      </section>

      <ContactCta heading="Talk to us about your business." />
    </>
  );
}
