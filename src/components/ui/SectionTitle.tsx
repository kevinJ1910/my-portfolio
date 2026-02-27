interface SectionTitleProps {
    label: string;
    title: string;
    subtitle?: string;
  }
  // Section Title Component

  export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
    return (
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">
          {label}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-slate-100 text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base text-slate-700 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    )
  }