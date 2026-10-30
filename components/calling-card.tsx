import { Mail } from 'lucide-react'

const EMAIL = 'pawankalyanpoloju99@gmail.com'

const TOOLS = ['SQL', 'Microsoft Power BI', 'Python', 'Excel', 'Tableau']

const STRENGTHS = [
  'Data collection, extraction & analysis',
  'Data quality assurance & validation',
  'Dashboards & data visualization',
  'Statistical analysis & root-cause analysis',
  'Documenting data flows & requirements',
  'Communicating findings to stakeholders & leadership',
]

export function CallingCard() {
  return (
    <article className="w-full max-w-2xl overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="h-2 bg-primary" aria-hidden="true" />

      <div className="flex flex-col gap-8 p-8 md:p-12">
        <header className="flex flex-col gap-3">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Pavan Kalyan Poloju
          </h1>
          <p className="text-lg font-medium text-primary">
            Application Development Analyst / Data Analyst
          </p>
        </header>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          Data Analyst with 4+ years of experience performing data collection, extraction,
          analysis, documentation, interpretation, validation, and reporting across financial
          and enterprise environments. Skilled in identifying patterns, trends, data integrity
          issues, root causes, and process improvement opportunities, and in developing sound
          data-driven recommendations.
        </p>

        <section aria-labelledby="tools-heading" className="flex flex-col gap-3">
          <h2
            id="tools-heading"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            Tools
          </h2>
          <ul className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="strengths-heading" className="flex flex-col gap-3">
          <h2
            id="strengths-heading"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            What I bring
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {STRENGTHS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Get in touch</p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span className="break-all">{EMAIL}</span>
          </a>
        </footer>
      </div>
    </article>
  )
}
