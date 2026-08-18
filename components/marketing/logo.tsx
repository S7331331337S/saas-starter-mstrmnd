import { cn } from "@/lib/utils";

/**
 * The mstrmnd mark — a wireframe tetrahedron.
 * Uses currentColor so it adapts to Ink / Bone contexts.
 */
export function TetrahedronMark({
  className,
  strokeWidth = 5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
      className={cn("block", className)}
      aria-hidden="true"
    >
      {/* Outer triangle */}
      <path d="M50 11 L89 85 L11 85 Z" />
      {/* Inner Y — central vertex to apex and the two base corners */}
      <path d="M50 11 L50 61 M50 61 L11 85 M50 61 L89 85" />
    </svg>
  );
}

/**
 * Horizontal lockup: mark + MSTRMND wordmark.
 * Inherits color from the parent (text-*).
 */
export function Wordmark({
  className,
  markClassName,
  textClassName,
  showMark = true,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showMark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {showMark ? (
        <TetrahedronMark className={cn("h-[1.1em] w-[1.1em]", markClassName)} />
      ) : null}
      <span
        className={cn(
          "font-mono font-semibold uppercase leading-none tracking-[0.34em]",
          textClassName,
        )}
      >
        MSTRMND
      </span>
    </span>
  );
}
