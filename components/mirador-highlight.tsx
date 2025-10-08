import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MiradorHighlight() {
  return (
    <section id="mirador" className="mx-auto max-w-6xl px-4 py-16 -mt-15">
      <div className="max-w-2xl">
        <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
          Mirador-Core — AI-powered observability backbone
        </h2>
        <p className="mt-3 text-muted-foreground">
          Unified REST API with OpenAPI, enterprise auth (LDAP/OAuth/RBAC), VictoriaMetrics family, Valkey caching, and
          live WebSocket streams. AI engines for prediction, RCA, and alerts communicate via gRPC + protobuf.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <FeatureBullets />
        <CodeSamples />
      </div>
    </section>
  )
}

function FeatureBullets() {
  const bullets = [
    { t: "Unified Query", d: "MetricsQL, LogsQL (Lucene), and Traces—one interface, massive scale." },
    { t: "AI Engines", d: "Predict fractures, run RCA with red anchors, and reduce alert noise." },
    { t: "Performance", d: "10× lower RAM vs. traditional stacks; sub-ms via Valkey cluster cache." },
    { t: "Enterprise", d: "RBAC, LDAP/AD, OAuth 2.0, rate limiting, multi-tenant isolation." },
    { t: "Multi-source", d: "Fan-out across multiple VM/VL/VT clusters and aggregate seamlessly." },
    { t: "Kubernetes-ready", d: "Helm chart with discovery, probes, HA replicas, and secure defaults." },
  ]
  return (
    <Card className="max-w-[23rem] md:max-w-none">
      <CardHeader>
        <CardTitle className="text-lg">Why Mirador-Core</CardTitle>
        <CardDescription>Architected for scale, security, and speed.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3">
          {bullets.map((b) => (
            <li key={b.t} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
              <div>
                <p className="font-medium">{b.t}</p>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function CodeSamples() {
  return (
    <Card className="max-w-[23rem] md:max-w-none">
      <CardHeader>
        <CardTitle className="text-lg">API Examples</CardTitle>
        <CardDescription>MetricsQL aggregate and RCA request</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md border bg-card p-3">
          <pre className="text-xs leading-6 overflow-x-auto">
            {`# MetricsQL (95th percentile)
curl -X POST https://mirador-core/api/v1/metrics/query/aggregate/quantile \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "query": "rate(http_requests_total[5m])", "params": {"quantile": 0.95} }'`}
          </pre>
        </div>
        <div className="rounded-md border bg-card p-3">
          <pre className="text-xs leading-6 overflow-x-auto">
            {`# Root Cause Analysis (RCA) with red anchors
curl -X POST https://mirador-core/api/v1/rca/investigate \\
  -H "Authorization: Bearer <token)" \\
  -H "Content-Type: application/json" \\
  -d '{
    "incident_id": "INC-2025-0831-001",
    "symptoms": ["high_cpu", "connection_timeouts"],
    "time_range": { "start": "2025-08-31T14:00:00Z", "end": "2025-08-31T15:00:00Z" },
    "affected_services": ["payment-service", "database"]
  }'`}
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}
