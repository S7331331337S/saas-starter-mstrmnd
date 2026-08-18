import Link from "next/link";
import { Reveal } from "@/components/marketing/reveal";

export function FinalCta() {
  return (
    <section className="border-b border-line bg-ink text-bone">
      <div className="container-sable flex flex-col items-center py-28 text-center">
        <Reveal>
          <p className="label-sable text-mid">Limited patience for busywork</p>
          <h2 className="heading-sable mt-6 text-[clamp(48px,9vw,140px)] leading-[0.85]">
            Think
            <br />
            bigger
          </h2>
          <p className="mx-auto mt-8 max-w-[420px] text-[15px] leading-relaxed text-bone/70">
            The plumbing of your day is handled. Sign up, connect your tools,
            and spend your attention on what only you can do.
          </p>
          <div className="mt-10 flex items-center justify-center gap-8">
            <Link href="/sign-up" className="btn-bone">
              Start free
            </Link>
            <Link href="/sign-in" className="btn-line btn-line--bone">
              Sign in
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
