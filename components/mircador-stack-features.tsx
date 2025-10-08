export default function MiradorStackFeatures() {
  return (
    <section id="mirador-features" className="mx-auto max-w-6xl py-16 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty">
            Mirador Stack :: The AI-Powered Observability Watchtower
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Go beyond traditional monitoring. Mirador unifies metrics, logs, and traces and applies AI-driven analysis
            for predictive insights and automated root cause detection across complex, distributed environments.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-medium">AI-Powered Analysis</h3>
            <p className="mt-2 text-muted-foreground">
              Predictive models and incident inference to shorten MTTD/MTTR. Focus on what matters with guided RCA and
              noise reduction.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-medium">Unified Querying</h3>
            <p className="mt-2 text-muted-foreground">
              Single-pane experience across MetricsQL, LogsQL and Traces with cross-signals correlation.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-medium">Enterprise Auth & RBAC</h3>
            <p className="mt-2 text-muted-foreground">
              Integrations for SSO, LDAP/OAuth, and role-based access for large teams and regulated environments.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-medium">Scalable & Real-Time</h3>
            <p className="mt-2 text-muted-foreground">
              High-ingest pipelines, streaming analysis, and efficient storage—built to handle population-scale
              telemetry.
            </p>
          </div>
        </div>

        {/* OpenTelemetry contributions inside Mirador section */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-semibold">Our Contributions to OpenTelemetry</h3>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            We’re active contributors to OpenTelemetry, bringing inline ML and shift-left alerting into standard
            pipelines.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h4 className="text-lg font-medium">Real-time Anomaly Detection (Isolation Forest Processor)</h4>
              <p className="mt-2 text-muted-foreground">
                Online Isolation Forest adds unsupervised ML directly into the collector to tag and score anomalies
                across metrics, logs, and traces—no external ML services required.
              </p>
              <div className="mt-3">
                <a href="#contact" className="inline-flex rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
                  Learn More
                </a>
              </div>
            </div>
            <div className="rounded-lg border p-6">
              <h4 className="text-lg font-medium">Shift-Left Intelligent Alerting (Alertsgen Connector)</h4>
              <p className="mt-2 text-muted-foreground">
                Evaluate rules inside the collector with deduplication and storm control to deliver high-fidelity
                alerts, cutting noise and speeding up detection.
              </p>
              <div className="mt-3">
                <a href="#contact" className="inline-flex rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}