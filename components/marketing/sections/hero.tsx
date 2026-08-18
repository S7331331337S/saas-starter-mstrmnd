import Image from "next/image";
import Link from "next/link";
import { Parallax } from "@/components/marketing/parallax";
import { assets } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-sable relative flex min-h-[calc(100svh-var(--nav-height)-40px)] flex-col justify-center py-16">
        {/* Floating context labels */}
        <div className="hv absolute left-[var(--gutter)] top-10 z-30" style={{ "--hv-delay": "0.55s" } as React.CSSProperties}>
          <p className="label-sable">Mastermind — Edition 01</p>
          <p className="label-sable text-mid mt-1.5">Personal · Agentic · Persistent</p>
        </div>
        <div className="hv absolute bottom-10 right-[var(--gutter)] z-30 text-right max-sm:hidden" style={{ "--hv-delay": "0.65s" } as React.CSSProperties}>
          <p className="label-sable">A mind that compounds</p>
          <p className="label-sable text-mid mt-1.5">For people who think in systems</p>
        </div>

        {/* Layer 1: massive wordmark behind the model */}
        <div className="pointer-events-none relative z-10 flex items-center justify-center">
          <Parallax speed={-0.06}>
            <h1
              aria-hidden="true"
              className="hv heading-sable normal-case select-none text-center leading-[0.8] tracking-[-0.04em]"
              style={{ fontSize: "clamp(64px, 18vw, 260px)", "--hv-delay": "0.1s" } as React.CSSProperties}
            >
              mstrmnd
            </h1>
          </Parallax>
          <span className="sr-only">mstrmnd — your personal agentic mastermind</span>
        </div>

        {/* Layer 2: model cutout in front of the type */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
          <Parallax speed={0.03}>
            <div className="hv" style={{ "--hv-delay": "0.3s" } as React.CSSProperties}>
              <Image
                src={assets.heroModel}
                alt=""
                width={560}
                height={740}
                priority
                className="img-grey h-[min(66svh,620px)] w-auto object-contain drop-shadow-[0_26px_46px_rgba(16,16,16,0.22)]"
              />
            </div>
          </Parallax>
        </div>

        {/* CTA cluster, bottom-left */}
        <div
          className="hv absolute bottom-10 left-[var(--gutter)] z-30 flex flex-col gap-5"
          style={{ "--hv-delay": "0.45s" } as React.CSSProperties}
        >
          <p className="max-w-[300px] text-[15px] leading-relaxed text-foreground/80">
            A council of agents that plans, researches, and executes with you —
            carrying every conversation forward in memory.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sign-up" className="btn-ink">
              Start free
            </Link>
            <Link href="/pricing" className="btn-line">
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
