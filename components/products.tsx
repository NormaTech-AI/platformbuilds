import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Products() {
  const products = [
    {
      name: "MiradorStack",
      tagline: "Unified metrics, logs, traces",
      desc: "Unified observability for metrics, logs, and traces with native OpenTelemetry pipelines and fast VictoriaMetrics storage. Delivers real-time dashboards, alerting, and AI-assisted triage to cut MTTR, with enterprise SSO/RBAC and multi-cluster support.",
      tags: ["Observability", "OpenTelemetry", "VM"],
    },
    {
      name: "Cosmolet",
      tagline: "Network fusion for K8s + bare metal",
      desc: "Unifies Kubernetes and bare-metal networks with policy-based BGP routing and multi-cluster overlays. Built for high-throughput, low-latency workloads in regulated and on-prem environments.",
      tags: ["Networking", "Kubernetes", "BGP"],
    },
    {
      name: "Telegen",
      tagline: "One agent, many signals",
      desc: "Lightweight eBPF agent capturing system, process, and network signals with near-zero overhead. Exposes Prometheus and OTLP for drop-in integration with existing observability and security pipelines.",
      tags: ["eBPF", "Agent", "OTLP"],
    },
    {
      name: "Telegen-Sonic",
      tagline: "Observability for SONiC NOS",
      desc: "Targeted observability for SONiC using eBPF tc-ingress hooks. Streams enriched flow data over OTLP, with optional ERSPAN helpers for deeper packet insights.",
      tags: ["SONiC", "eBPF", "Networking"],
    },
    {
      name: "Cosmonic",
      tagline: "Resilient virtual NIC",
      desc: "Resilient virtual NIC for demanding edge and data-center deployments. Combines kernel eBPF and DPDK paths for ultra-low-latency load balancing, fast failover, and predictable performance.",
      tags: ["DPDK", "eBPF", "Resiliency"],
    },
  ]
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 pt-24">
      <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
        DevOps platforms you can run anywhere
      </h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        From multi-cluster networking to full-stack observability, each project is built to be cloud-native, composable,
        and production-ready.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.name} className="flex flex-col">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <CardDescription>{p.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 grow">
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
