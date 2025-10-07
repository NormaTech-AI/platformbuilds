import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const items = [
    {
      title: "Privacy-first & Airgapped",
      desc: "Built to operate in disconnected and high-security environments without compromising capability.",
    },
    {
      title: "CNCF-aligned Platforms",
      desc: "Kubernetes-native foundations and OpenTelemetry throughout—no lock-in, future-proof by design.",
    },
    {
      title: "Programmable & Sustainable",
      desc: "APIs, automation, and efficient resource usage at scale for real-world production workloads.",
    },
    {
      title: "For Regulated Industries",
      desc: "Finance, healthcare, public sector, and defense—enterprise authentication and RBAC included.",
    },
  ]
  return (
    <section id="mission" className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
          Mission-driven platforms for modern operators
        </h2>
        <p className="mt-3 text-muted-foreground">
          Our mission is to bridge infrastructure, AI, and observability with open, production-grade building blocks
          that scale and endure.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
