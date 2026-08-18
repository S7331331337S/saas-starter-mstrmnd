import Link from "next/link";
import { CurrentYear } from "@/components/marketing/current-year";

export function MarketingFooter() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-sable grid grid-cols-4 gap-10 py-20 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <p className="label-sable text-mid mb-5">Mastermind</p>
          <address className="not-italic text-[13.5px] leading-7 text-bone/80">
            mstrmnd
            <br />
            A personal agentic
            <br />
            mastermind
          </address>
        </div>
        <div>
          <p className="label-sable text-mid mb-5">Product</p>
          <ul className="space-y-3 text-[13.5px]">
            <li><Link className="hover:underline underline-offset-4" href="/#platform">The mind</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/#stack">The method</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="label-sable text-mid mb-5">Account</p>
          <ul className="space-y-3 text-[13.5px]">
            <li><Link className="hover:underline underline-offset-4" href="/sign-in">Sign in</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/sign-up">Start free</Link></li>
            <li><Link className="hover:underline underline-offset-4" href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <p className="label-sable text-mid mb-5">Company</p>
          <ul className="space-y-3 text-[13.5px]">
            <li>
              <a
                className="hover:underline underline-offset-4"
                href="mailto:hello@mstrmnd.ai"
              >
                Contact
              </a>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href="/pricing">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-sable flex items-center justify-between border-t border-bone/15 py-8 max-sm:flex-col max-sm:gap-4">
        <span className="heading-sable normal-case text-[30px]" aria-hidden="true">
          mstrmnd
        </span>
        <p className="label-sable text-mid">
          © <CurrentYear serverYear={new Date().getFullYear()} /> mstrmnd —
          your personal agentic mastermind.
        </p>
      </div>
    </footer>
  );
}
