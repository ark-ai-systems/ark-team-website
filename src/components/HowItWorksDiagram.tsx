const steps = [
  { number: "01", label: "Connect", caption: "files, records, past work" },
  { number: "02", label: "Choose", caption: "a task, and what it draws on" },
  {
    number: "03",
    label: "Check",
    caption: "across models, before it returns",
    emphasized: true,
  },
  { number: "04", label: "Grow", caption: "shared, and sharper each time" },
];

function ConnectIcon() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-24 w-24">
        <div className="absolute left-1/2 top-1/2 h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-text" />
        <div className="absolute left-2 top-2 h-[14px] w-[14px] rounded-full border-[1.5px] border-[#C6BFB2]" />
        <div className="absolute right-2 top-2 h-[14px] w-[14px] rounded-full border-[1.5px] border-[#C6BFB2]" />
        <div className="absolute bottom-1 left-1/2 h-[14px] w-[14px] -translate-x-1/2 rounded-full border-[1.5px] border-[#C6BFB2]" />
      </div>
    </div>
  );
}

function ChooseIcon() {
  const cells = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {cells.map((active, i) => (
          <div
            key={i}
            className={`h-[22px] w-[22px] ${active ? "bg-accent" : "bg-[#E4DED4]"}`}
          />
        ))}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-24 w-[132px]">
        <div className="absolute left-0 top-4 h-16 w-16 rounded-full border-[1.5px] border-[#C6BFB2]" />
        <div className="absolute left-[34px] top-4 h-16 w-16 rounded-full border-[1.5px] border-[#C6BFB2]" />
        <div className="absolute left-[68px] top-4 h-16 w-16 rounded-full border-[1.5px] border-[#C6BFB2]" />
        <div className="absolute left-[52px] top-9 h-6 w-6 rounded-full bg-accent" />
      </div>
    </div>
  );
}

function GrowIcon() {
  const dots = [
    1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2,
  ];
  return (
    <div className="flex h-full items-end justify-center">
      <div className="grid grid-cols-5 grid-rows-4 gap-[10px]">
        {dots.map((value, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              value === 2
                ? "bg-accent"
                : value === 1
                  ? "bg-text"
                  : "bg-[#DDD7CC]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const icons = [ConnectIcon, ChooseIcon, CheckIcon, GrowIcon];

export function HowItWorksDiagram() {
  return (
    <figure className="m-0 w-full border border-border bg-surface px-6 py-10 sm:px-10 sm:py-14">
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-0 md:gap-y-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[10%] hidden h-px bg-[#DED8CD] md:block"
          style={{ top: "66px" }}
        />
        {steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <div
              key={step.number}
              className="flex flex-col items-center gap-6 px-2 sm:px-4"
            >
              <div className="flex h-[110px] w-full items-center justify-center sm:h-[132px]">
                <Icon />
              </div>
              <div className="flex w-full flex-col items-center gap-2">
                <div
                  className={`rounded-full ${
                    step.emphasized
                      ? "h-[15px] w-[15px] bg-accent"
                      : "h-[11px] w-[11px] bg-text"
                  }`}
                />
                <div
                  className={`font-mono text-[11px] tracking-[0.18em] ${
                    step.emphasized ? "text-accent" : "text-text-muted"
                  }`}
                >
                  {step.number}
                </div>
                <div className="text-xl tracking-[-0.01em] sm:text-[23px]">
                  {step.label}
                </div>
                <div className="max-w-[180px] text-center font-mono text-xs leading-[1.5] text-text-muted">
                  {step.caption}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
