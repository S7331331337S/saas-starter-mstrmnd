import { Reveal } from "@/components/marketing/reveal";
import { assets } from "@/lib/assets";

export function Craft() {
  return (
    <section className="border-b border-line bg-tan">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="relative min-h-[520px] overflow-hidden max-md:min-h-[380px]">
          <video
            className="img-grey absolute inset-0 h-full w-full object-cover"
            src={assets.clothVideo}
            poster={assets.clothPoster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col justify-center px-[var(--gutter)] py-24">
          <Reveal>
            <p className="label-sable text-mid">The memory</p>
            <h2 className="heading-sable mt-4 text-[clamp(34px,4.4vw,58px)]">
              Memory, not amnesia
            </h2>
            <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-foreground/75">
              No hidden reasoning, no black box. Every plan, tool call, and
              source is visible before you act on it — and every thread is
              remembered. A mastermind should be a partner you can inspect, not
              an oracle you have to trust blindly.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-8 max-w-[440px]">
              <div>
                <dt className="label-sable text-mid">Retention</dt>
                <dd className="mt-2 text-[13.5px]">Persistent context</dd>
              </div>
              <div>
                <dt className="label-sable text-mid">Ownership</dt>
                <dd className="mt-2 text-[13.5px]">Yours to export, anytime</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
