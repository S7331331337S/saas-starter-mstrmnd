export type Plan = {
  key: "free" | "pro";
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  /** Stripe price ID. Undefined for the free plan or when env is not set. */
  priceId?: string;
};

export const plans: Plan[] = [
  {
    key: "free",
    name: "Solo",
    price: "$0",
    cadence: "forever",
    blurb: "For thinking alongside a single agent. No card required.",
    features: [
      "One reasoning agent",
      "Persistent memory",
      "Connect 3 tools",
      "Community support",
    ],
  },
  {
    key: "pro",
    name: "Mastermind",
    price: "$20",
    cadence: "per month",
    blurb: "The full council. Every agent, unlimited memory, billed via Stripe.",
    features: [
      "Everything in Solo",
      "Unlimited parallel agents",
      "Unlimited memory & tools",
      "Priority support",
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO,
  },
];

export const proPlan = plans[1];
