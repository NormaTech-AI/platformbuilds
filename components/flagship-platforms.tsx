export default function FlagshipPlatforms() {
  return (
    <section id="flagships" className="mx-auto max-w-6xl py-16 pt-20 -m-15 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty">Our Flagship Platforms</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We build production-grade solutions to solve complex challenges in cloud-native infrastructure. Mirador and
            Cosmo provide comprehensive observability and unified networking for the modern data center.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mirador Card */}
          <div className="rounded-lg border bg-card text-card-foreground p-6">
            <div className="flex items-center gap-2">
              <span aria-hidden>🔭</span>
              <h3 className="text-xl font-semibold">Mirador Stack</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              The AI-Powered Observability Watchtower. Unifies metrics, logs, and traces with predictive analysis and
              automated root cause detection to ensure reliability in distributed systems.
            </p>
            <div className="mt-4">
              <a
                href="#mirador-features"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
              >
                Explore Mirador Features
              </a>
            </div>
          </div>

          {/* Cosmo Card */}
          <div className="rounded-lg border bg-card text-card-foreground p-6">
            <div className="flex items-center gap-2">
              <span aria-hidden>🔗</span>
              <h3 className="text-xl font-semibold">Cosmo Stack</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              The Unified Network Fabric. A network fusion layer that treats Kubernetes and Bare Metal as one
              programmable fabric—bringing declarative, cloud-native agility to the data center.
            </p>
            <div className="mt-4">
              <a
                href="#cosmo-features"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
              >
                Discover Cosmo&apos;s Power
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}