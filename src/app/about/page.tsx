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
          The people behind Ark Team.
        </h1>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-16 px-6 pb-16 sm:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
              Kevin Cheney
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
              Co-Founder and CTO of Ark Team
            </p>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-[1.62] text-text-secondary">
            <p>
              He started out at Glassbox, an analytics company serving some
              of the largest banks in the world, as its first and only
              technical writer. He built their documentation from the
              ground up, turning complicated systems into language people
              could actually act on.
            </p>
            <p>
              He went on to build an arbitrage trading system for Bancor. He
              worked out the underlying math himself, then built software
              that monitored markets continuously, weighed thousands of
              possible trades at once, and executed on its own. It
              facilitated more than $100 million in transactions. He also
              built a second, independent system whose only job was to
              catch what the first one missed, on the principle that the
              most expensive failures are the ones nothing tells you
              about.
            </p>
            <p>
              Ark Team is where those two halves meet: years spent making
              complex technology understandable, then years spent building
              it. The tools are available to everyone now, but so far the
              returns have gone mostly to companies with engineering teams
              behind them. Kevin's aim is to give smaller businesses that
              same leverage, with systems built to hold up under real
              conditions, explained in plain English, and aimed at the
              places where AI actually pays for itself.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
              Rachel Karlin
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
              Co-Founder of Ark Team
            </p>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-[1.62] text-text-secondary">
            <p>
              Rachel holds two master&apos;s degrees, in technical
              communication and creative writing, and spent thirty years in
              high tech, working across startups and massive corporations.
              She also serves on the board of two NGOs, Nerissa&apos;s Place
              and Gabriel Project Mumbai.
            </p>
            <p>
              Her work centers on hiring outstanding teams across the globe
              and managing them well across continents and cultures. She has
              spent much of her career helping organizations handle change:
              new technology rollouts, new organizational structures, and,
              most recently, a full conversion to an AI-first organization.
              That meant embracing new tools, reimagining how jobs and
              tasks work once AI is part of doing them, and helping people
              from every kind of background make AI part of how they work.
            </p>
            <p>
              She has led organizations of up to eighty people. Her approach
              starts with setting a clear vision, breaking that vision into
              pieces a team can actually finish, and getting everyone to
              the finish line together, in an environment that stays
              collaborative and genuinely fun. Ark Team is where that
              experience gets applied at a smaller scale: the same ability
              to turn a big change into work a team can complete, now aimed
              at businesses that don&apos;t have a transformation team of
              their own.
            </p>
          </div>
        </div>

        <p className="text-lg leading-[1.62] text-text-secondary">
          Avner Engel&apos;s full bio is coming soon.
        </p>
      </section>

      <ContactCta heading="Talk to us about your business." />
    </>
  );
}
