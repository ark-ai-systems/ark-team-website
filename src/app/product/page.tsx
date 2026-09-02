import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactCta } from "@/components/ContactCta";
import { HowItWorksDiagram } from "@/components/HowItWorksDiagram";

const description =
  "ARKai holds a growing library of ready-made tasks built around the work your business actually does. See how it connects to your business, runs expert processes, and returns finished work.";

export const metadata: Metadata = {
  title: "Product",
  description,
  openGraph: {
    title: "Ark Team | Product",
    description,
    images: ["/og-image.png"],
  },
};

const steps = [
  {
    number: "01",
    heading: "We connect ARKai to your business.",
    body: "Your files, your customer records, your past work. You choose what ARKai can see, and it reads only that, so it understands your company before anyone runs a single task.",
  },
  {
    number: "02",
    heading:
      "Your team picks a task and points it at the right information.",
    body: "They choose from tasks built for your kind of work, then choose what ARKai should draw on. One customer or all of them. Last quarter's files or the whole archive. A few clicks sets it, so the right information is in front of ARKai every time.",
  },
  {
    number: "03",
    heading: "Expert processes run behind everything.",
    body: "Every task your team runs is carried by processes our experts built and tested. Those processes check the work across leading AI models, look for weak spots, and hold the result to a standard before it comes back. Your team sees finished work. The expert part runs on its own.",
  },
  {
    number: "04",
    heading: "Your team's knowledge grows together.",
    body: "Every result stays in the shared space where your whole team works. What one person learns becomes something everyone can use, so the company gets sharper with every task.",
  },
];

const tasks = [
  {
    heading: "Turn a client meeting into a plan.",
    body: "Drop in the notes or the recording. Get back what was decided, who owns each piece, and when it is due. Your team confirms it and moves on.",
  },
  {
    heading: "Send the weekly client update without writing it.",
    body: "ARKai pulls what happened this week, what moved, and what is stuck, and drafts the update in your voice. Someone reads it and sends it.",
  },
  {
    heading: "Get a proposal drafted from your discovery notes.",
    body: "Your notes, your services, your pricing rules. ARKai writes the first draft. Whoever owns the deal checks the scope and the numbers before it goes out.",
  },
];

const security = [
  {
    q: "Do you train AI on our data?",
    a: "No.",
  },
  {
    q: "Can our competitors see our information?",
    a: "No. Your data stays separate from every other company's.",
  },
  {
    q: "Who on our team can see what?",
    a: "Whatever you decide. ARKai follows the permissions you already use.",
  },
  {
    q: "Does anything get sent out without us knowing?",
    a: "No. Nothing leaves your hands until someone on your team approves it.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pt-20 pb-16 sm:px-8 sm:pt-28">
        <Eyebrow>What it is</Eyebrow>
        <h1 className="text-[34px] font-normal leading-[1.16] tracking-[-0.015em] sm:text-[46px]">
          The expert work is done. Your team takes it from there.
        </h1>
        <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary sm:text-xl">
          ARKai holds a growing library of ready-made tasks built around the
          work your business actually does. Your team picks one, adds what
          makes it theirs, and gets back finished work. Building this from
          scratch would take a team of AI specialists and months of work. It
          already exists, so your company gets it for a fraction of what
          building it would cost.
        </p>
      </section>

      <section className="px-6 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <HowItWorksDiagram />
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-11 px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-4">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-2xl font-normal leading-snug tracking-[-0.015em] sm:text-[28px]">
            From your business to finished work.
          </h2>
        </div>
        <div className="flex flex-col gap-9">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-[32px_1fr] gap-5 sm:grid-cols-[44px_1fr]"
            >
              <div className="pt-1 font-mono text-[13px] text-accent">
                {step.number}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-[-0.01em] sm:text-[22px]">
                  {step.heading}
                </h3>
                <p className="max-w-[600px] text-lg leading-[1.62] text-text-secondary">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20 sm:px-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>What your team can do with it</Eyebrow>
            <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
              Real work, start to finish.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {tasks.map((task) => (
              <div
                key={task.heading}
                className="flex flex-col gap-3 border border-border bg-bg p-6"
              >
                <h3 className="text-lg font-semibold tracking-[-0.01em]">
                  {task.heading}
                </h3>
                <p className="text-base leading-[1.62] text-text-secondary">
                  {task.body}
                </p>
              </div>
            ))}
          </div>
          <p className="max-w-[680px] text-lg leading-[1.62] text-text-secondary">
            Every one of these ends with a person, not a send button. Your
            team reviews the work before anything leaves your company.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-4">
          <Eyebrow>Your data stays yours</Eyebrow>
          <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
            The short answers.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {security.map((item) => (
            <div key={item.q} className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">
                {item.q}
              </h3>
              <p className="text-lg leading-[1.62] text-text-secondary">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-4">
          <Eyebrow>Demo</Eyebrow>
          <h2 className="text-2xl font-normal tracking-[-0.015em] sm:text-[28px]">
            See ARKai at work.
          </h2>
        </div>
        <div className="flex aspect-video w-full items-center justify-center border border-border bg-surface">
          <span className="font-mono text-sm uppercase tracking-[0.14em] text-text-muted">
            Demo coming soon
          </span>
        </div>
      </section>

      <ContactCta heading="Talk to us about your business." />
    </>
  );
}
