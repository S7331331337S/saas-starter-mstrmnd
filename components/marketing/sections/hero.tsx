import Link from "next/link";
import { TetrahedronMark } from "@/components/marketing/logo";

const agents = [
  { id: "01", name: "Research", task: "Mapping the market", state: "ACTIVE" },
  { id: "02", name: "Strategy", task: "Testing assumptions", state: "THINKING" },
  { id: "03", name: "Operator", task: "Preparing the brief", state: "QUEUED" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bone">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-sable relative grid min-h-[calc(100svh-var(--nav-height)-40px)] grid-cols-12 items-center gap-8 py-16 max-lg:grid-cols-1 max-lg:py-20">
        <div className="relative z-10 col-span-7 max-lg:col-span-1">
          <div
            className="hv mb-10 flex items-center gap-4"
            style={{ "--hv-delay": "0.05s" } as React.CSSProperties}
          >
            <span className="h-px w-10 bg-ink" aria-hidden="true" />
            <p className="label-sable">Personal intelligence / Edition 01</p>
          </div>

          <h1
            className="hv heading-sable normal-case max-w-[850px] text-[clamp(64px,10.5vw,156px)] leading-[0.78] tracking-[-0.065em]"
            style={{ "--hv-delay": "0.12s" } as React.CSSProperties}
          >
            Think less
            <br />
            <span className="text-mid">alone.</span>
          </h1>

          <div
            className="hv mt-12 grid max-w-[650px] grid-cols-[1fr_auto] items-end gap-10 border-t border-ink pt-7 max-sm:grid-cols-1"
            style={{ "--hv-delay": "0.24s" } as React.CSSProperties}
          >
            <p className="max-w-[430px] text-[17px] leading-relaxed text-foreground/75">
              One persistent mind made of specialist agents. It remembers your
              context, challenges your thinking, and turns intent into finished work.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/sign-up" className="btn-ink whitespace-nowrap">
                Build your mind
              </Link>
              <Link href="/#platform" className="btn-line whitespace-nowrap">
                See how
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hv relative col-span-5 min-h-[590px] max-lg:col-span-1 max-lg:min-h-[520px] max-sm:min-h-[470px]"
          style={{ "--hv-delay": "0.32s" } as React.CSSProperties}
        >
          <div className="absolute inset-0 border border-ink bg-ink text-bone shadow-[18px_18px_0_var(--tan)]">
            <div className="flex items-center justify-between border-b border-bone/20 px-6 py-4">
              <p className="label-sable text-bone/60">MSTRMND / LIVE COUNCIL</p>
              <span className="flex items-center gap-2 text-[9px] tracking-[0.18em]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bone" /> ONLINE
              </span>
            </div>

            <div className="relative flex h-[250px] items-center justify-center overflow-hidden border-b border-bone/20">
              <div className="hero-orbit absolute h-[190px] w-[190px] rounded-full border border-bone/15" />
              <div className="hero-orbit hero-orbit--reverse absolute h-[130px] w-[130px] rounded-full border border-dashed border-bone/30" />
              <TetrahedronMark className="relative z-10 h-28 w-28 text-bone" strokeWidth={2.5} />
              <span className="label-sable absolute bottom-5 left-6 text-bone/45">
                Shared memory / 184 threads
              </span>
            </div>

            <div className="divide-y divide-bone/15">
              {agents.map((agent) => (
                <div key={agent.id} className="grid grid-cols-[32px_1fr_auto] items-center gap-4 px-6 py-5">
                  <span className="font-mono text-[10px] text-bone/40">{agent.id}</span>
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.08em]">{agent.name}</p>
                    <p className="mt-1 text-[11px] text-bone/50">{agent.task}</p>
                  </div>
                  <span className="label-sable text-bone/55">{agent.state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="label-sable absolute bottom-7 left-[var(--gutter)] text-mid max-lg:hidden">
          Autonomous agents · Persistent memory · Connected tools
        </p>
      </div>
    </section>
  );
}
