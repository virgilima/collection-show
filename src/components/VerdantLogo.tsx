export function VerdantLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 42 V20" />
      <path d="M20 22 C 10 22, 6 14, 8 6 C 16 6, 22 12, 20 22 Z" />
      <path d="M20 22 C 30 22, 34 14, 32 6 C 24 6, 18 12, 20 22 Z" />
    </svg>
  );
}
