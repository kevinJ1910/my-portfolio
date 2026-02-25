import { cn } from "@/lib/utils";

// Badge Component
interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        "bg-primary/10 text-primary border border-primary/20",
        className
      )}
    >
      {label}
    </span>
  )
}