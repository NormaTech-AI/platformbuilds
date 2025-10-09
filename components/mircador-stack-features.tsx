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
                <a href="#contact-us" className="inline-flex rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
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
                <a href="#contact-us" className="inline-flex rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div> */}
                <div className="mt-12">
          <h3 className="text-2xl font-semibold">Our Contributions to OpenTelemetry</h3>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            We extend the OpenTelemetry Collector with real-time processing components—bringing inline ML and shift-left
            alerting directly into standard pipelines across metrics, logs, and traces.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6 flex flex-col justify-between">
              <h4 className="text-lg font-medium">Online Isolation Forest Processor (Real-time Anomaly Detection)</h4>
              <p className="mt-2 text-muted-foreground">
                Adds in-flight, unsupervised anomaly detection to the Collector. Learns normal behavior from streaming
                metrics, logs, and traces, then tags/scores outliers—without requiring any external ML service or GPU.
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#contact-us" className="inline-flex rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
                  Learn More
                </a>
                <a
                  href="https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/41707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline underline-offset-4"
                  aria-label="View OpenTelemetry Collector Contrib Issue 41707 for Isolation Forest Processor"
                >
                  GitHub Issue #41707
                </a>
              </div>
            </div>
            <div className="rounded-lg border p-6 flex flex-col justify-between">
              <h4 className="text-lg font-medium">Alerts Generator Connector (Shift-Left Rule Evaluation)</h4>
              <p className="mt-2 text-muted-foreground">
                Performs real-time rule evaluation inside the Collector across metrics, logs, and traces—with built-in
                de-duplication, rate limiting, and cardinality controls. Reduces alert storms and improves MTTD by
                pushing alert logic earlier in the pipeline.
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#contact-us" className="inline-flex rounded-md bg-secondary px-3 py-2 text-secondary-foreground">
                  Learn More
                </a>
                <a
                  href="https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/41969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline underline-offset-4"
                  aria-label="View OpenTelemetry Collector Contrib Issue 41969 for Alerts Generator Connector"
                >
                  GitHub Issue #41969
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}