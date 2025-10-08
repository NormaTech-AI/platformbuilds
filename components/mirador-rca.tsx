import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MiradorRCAHighlight() {
  return (
    <section id="mirador-rca" className="mx-auto max-w-6xl px-4 md:py-16">
      <div className="max-w-2xl">
        <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
          Mirador-RCA — Intelligent, high-speed root cause analysis
        </h2>
        <p className="mt-3 text-muted-foreground">
          Automated investigations that connect metrics, logs, traces, and real-time service topology to pinpoint the
          true root cause—fast. Get a clear timeline, a confidence-scored root cause, and actionable recommendations.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">How the analysis works</CardTitle>
            <CardDescription>From topology to recommendations in seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>Full-system topology mapping (upstream/downstream dependencies).</li>
              <li>Unified signal correlation across metrics, logs, and traces.</li>
              <li>Automated anomaly detection (z-score, MAD, error spikes).</li>
              <li>Causal timeline construction across affected services.</li>
              <li>Root cause identification with confidence scoring.</li>
              <li>AI-powered recommendations via history with rule-based fallback.</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Operational notes</CardTitle>
            <CardDescription>What to have in place</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>OTel servicegraphconnector metrics for dependency graphs.</li>
              <li>Mirador-Core helper APIs for metrics, logs, and traces.</li>
              <li>Weaviate for history, similarity, and persistence.</li>
              <li>Track p95 investigation latency; tune thresholds if needed.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-md border bg-card p-4">
        <h3 className="font-medium">Why teams adopt Mirador-RCA</h3>
        <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            <div>
              <span className="font-semibold">Bridges the gap from Business Impact to Technical Causation</span>
              &nbsp;by breaking down team silos and correlating data across your entire stack.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            <div>
              <span className="font-semibold">Finds the "smoking gun"</span>
              &nbsp;with topology-aware intelligence that understands cascading failures.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            <div>
              <span className="font-semibold">Delivers AI-driven insights</span>
              &nbsp;that continuously learn from your system's history to improve accuracy.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            <div>
              <span className="font-semibold">Enables rapid incident response</span>
              &nbsp;with high-speed, comprehensive root cause analysis.
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}