import { Reveal } from "@/components/marketing/reveal";

const guarantees = [
  {
    title: "Private by default",
    body: "Your memory and data stay yours. Nothing trains a shared model.",
  },
  {
    title: "Transparent reasoning",
    body: "See every plan, tool call, and source before you act on it.",
  },
  {
    title: "Connect your stack",
    body: "Plugs into the tools you already use — no rip and replace.",
  },
  {
    title: "Cancel anytime",
    body: "Self-serve billing. Upgrade or leave whenever it suits you.",
  },
];

export function ServiceRow() {
  return (
    <section>
      <div className="container-sable grid grid-cols-4 gap-10 py-16 max-md:grid-cols-2 max-sm:grid-cols-1">
      {guarantees.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <div className="border-t border-ink pt-5">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em]">{item.title}</h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-mid">{item.body}</p>
          </div>
        </Reveal>
      ))}
      </div>
    </section>
  );
}
