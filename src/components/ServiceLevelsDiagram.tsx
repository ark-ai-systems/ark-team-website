function LevelLabel({
  n,
  name,
  desc,
  accent,
}: {
  n: string;
  name: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
      <span
        className={`font-mono text-xs tracking-[0.2em] ${
          accent ? "text-accent" : "text-text-muted"
        }`}
      >
        LEVEL {n}
      </span>
      <span className="text-xl sm:text-2xl">{name}</span>
      <span className="text-sm text-text-muted sm:text-[15px]">{desc}</span>
    </div>
  );
}

export function ServiceLevelsDiagram() {
  return (
    <div className="w-full border-2 border-text bg-surface p-4 sm:p-8">
      <LevelLabel
        n="03"
        name="Complete"
        desc="Expertise inside your team, and a business built to run AI-first"
        accent
      />
      <div className="mt-6 border border-text/70 bg-[#F2EDE5] p-4 sm:mt-8 sm:p-6">
        <LevelLabel
          n="02"
          name="Advanced"
          desc="Deep integration with the work your business actually does"
        />
        <div className="mt-5 border border-text/50 bg-[#E4DED4] p-4 sm:mt-6">
          <LevelLabel
            n="01"
            name="Essential"
            desc="ARKai, set up and ready for your team"
          />
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-text-muted sm:mt-8">
        Each level includes everything in the level below it.
      </p>
    </div>
  );
}
