import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/marketing/reveal";
import { assets } from "@/lib/assets";

const features = [
  {
    index: "01",
    title: "Autonomous agents",
    body: "Delegate whole objectives, not just prompts. Agents plan the steps, call the tools, and report back when the work is done.",
    image: assets.catMen,
    href: "/sign-up",
    cta: "Meet your agents",
  },
  {
    index: "02",
    title: "Persistent memory",
    body: "Every decision, preference, and thread is remembered. Context compounds instead of resetting with each session.",
    image: assets.catTailoring,
    href: "/#stack",
    cta: "How memory works",
  },
  {
    index: "03",
    title: "Context routing",
    body: "Connected to your stack. mstrmnd pulls the right context and picks the right tool for each task, automatically.",
    image: assets.catWomen,
    href: "/pricing",
    cta: "See the plans",
  },
];

export function FeatureStrip() {
  return (
    <section id="platform" className="bg-ink text-bone">
      <div className="container-sable py-24">
        <Reveal>
          <p className="label-sable text-mid">The mind</p>
          <h2 className="heading-sable mt-4 max-w-[720px] text-[clamp(34px,5vw,64px)]">
            Everything a second brain should do, on call
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-3 gap-px bg-bone/15 max-md:grid-cols-1">
          {features.map((feature, i) => (
            <Reveal key={feature.index} delay={i * 120} className="bg-ink">
              <article className="flex h-full flex-col p-8 max-md:p-6">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-grey object-cover opacity-80 transition-transform duration-700 ease-[cubic-bezier(.6,0,.2,1)] hover:scale-[1.04]"
                  />
                  <span className="label-sable absolute left-4 top-4 text-bone/70">
                    {feature.index}
                  </span>
                </div>
                <h3 className="heading-sable mt-7 text-[24px]">{feature.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-bone/65">
                  {feature.body}
                </p>
                <Link
                  href={feature.href}
                  className="arrow-link label-sable mt-7 inline-flex items-center gap-3 text-bone"
                >
                  {feature.cta}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
