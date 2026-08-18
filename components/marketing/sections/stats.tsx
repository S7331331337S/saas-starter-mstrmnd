import { Counter } from "@/components/marketing/counter";
import { Reveal } from "@/components/marketing/reveal";

const stats = [
  { value: 12, suffix: "", label: "Specialist agents on call" },
  { value: 0, suffix: "", label: "Context you re-explain" },
  { value: 24, suffix: "/7", label: "Working while you sleep" },
  { value: 100, suffix: "%", label: "Yours — private by default" },
];

export function Stats() {
  return (
    <section className="border-b border-line bg-tan">
      <div className="container-sable grid grid-cols-4 gap-10 py-20 max-md:grid-cols-2">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div>
              <p className="heading-sable text-[clamp(44px,6vw,84px)]">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="label-sable mt-3 text-foreground/70">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
