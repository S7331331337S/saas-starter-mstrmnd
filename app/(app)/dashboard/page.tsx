"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { currentSubscription, formatStripeDate, isEntitled } from "@/lib/subscription";
import { proPlan } from "@/lib/plans";

const checklist = [
  {
    title: "Meet your agents",
    body: "Give your mastermind a first objective and watch it plan, research, and report back.",
    href: "/settings",
  },
  {
    title: "Connect your tools",
    body: "Link the apps you already use so agents can act with real context, not guesses.",
    href: "/settings",
  },
  {
    title: "Upgrade to Mastermind",
    body: "Unlock unlimited parallel agents, memory, and every integration from the billing page.",
    href: "/billing",
  },
];

export default function DashboardPage() {
  const user = useQuery(api.users.current);
  const subscriptions = useQuery(api.billing.listMySubscriptions);
  const subscription = currentSubscription(subscriptions);
  const entitled = subscription !== null && isEntitled(subscription);

  return (
    <div className="space-y-12">
      <div>
        <p className="label-sable text-mid">Workspace</p>
        {user === undefined ? (
          <Skeleton className="mt-4 h-12 w-72" />
        ) : (
          <h1 className="heading-sable mt-3 text-[clamp(32px,4.4vw,56px)]">
            {user?.name ? `Hello, ${user.name.split(" ")[0]}` : "Hello"}
          </h1>
        )}
        <p className="mt-3 max-w-[480px] text-[13.5px] text-mid">
          Your council is ready. Set the context, choose an objective, and let
          your agents turn it into a plan.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-px border border-line bg-line max-md:grid-cols-1">
        <section className="bg-background p-7">
          <p className="label-sable text-mid">Plan</p>
          {subscriptions === undefined ? (
            <Skeleton className="mt-4 h-8 w-40" />
          ) : (
            <>
              <p className="heading-sable mt-3 text-[26px]">
                {entitled ? proPlan.name : "Solo"}
              </p>
              <Badge variant={entitled ? "default" : "outline"} className="label-sable mt-3">
                {subscription ? subscription.status.replace("_", " ") : "free tier"}
              </Badge>
            </>
          )}
          <Link href="/billing" className="btn-line mt-6 inline-flex">
            Manage billing
          </Link>
        </section>

        <section className="bg-background p-7">
          <p className="label-sable text-mid">Renewal</p>
          {subscriptions === undefined ? (
            <Skeleton className="mt-4 h-8 w-40" />
          ) : subscription && entitled ? (
            <>
              <p className="heading-sable mt-3 text-[26px]">
                {formatStripeDate(subscription.currentPeriodEnd)}
              </p>
              <p className="mt-3 text-[13.5px] text-mid">
                {subscription.cancelAtPeriodEnd
                  ? "Cancels at period end."
                  : "Renews automatically."}
              </p>
            </>
          ) : (
            <>
              <p className="heading-sable mt-3 text-[26px]">—</p>
              <p className="mt-3 text-[13.5px] text-mid">
                No subscription yet. The free tier never expires.
              </p>
            </>
          )}
        </section>

        <section className="bg-background p-7">
          <p className="label-sable text-mid">Account</p>
          {user === undefined ? (
            <Skeleton className="mt-4 h-8 w-40" />
          ) : (
            <>
              <p className="heading-sable mt-3 truncate text-[26px]">
                {user?.email ?? "Synced"}
              </p>
              <p className="mt-3 text-[13.5px] text-mid">
                Stored in Convex <code className="text-[12px]">users</code> table via Clerk JWT.
              </p>
            </>
          )}
          <Link href="/settings" className="btn-line mt-6 inline-flex">
            Settings
          </Link>
        </section>
      </div>

      <section>
        <p className="label-sable text-mid">Getting started</p>
        <div className="mt-5 border-t border-line">
          {checklist.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="arrow-link grid grid-cols-[44px_1fr_auto] items-baseline gap-6 border-b border-line py-5 transition-colors hover:bg-muted/60"
            >
              <span className="label-sable text-mid" style={{ fontVariantNumeric: "tabular-nums" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-[15px] font-bold uppercase tracking-[-0.01em]">
                  {item.title}
                </span>
                <span className="mt-1 block text-[13.5px] text-mid">{item.body}</span>
              </span>
              <span className="arrow label-sable" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
