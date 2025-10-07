export default function CollaborationSection() {
  return (
    <section id="collaboration" aria-label="Engineering Collaboration as a Service" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Beyond the License: Engineering Collaboration as a Service
          </h2>
        </header>

        <div className="space-y-6 text-pretty">
          <p className="text-muted-foreground leading-relaxed">
            {
              "Our open-source platforms are free and powerful, but their true value is unlocked through partnership. We don't sell software licenses; we offer direct access to the expert engineers who build and maintain our CNCF-compliant tools."
            }
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {
              "Through our Engineering Collaboration Service, we work as an extension of your team to architect, implement, and scale our platforms within your unique environment. This model ensures you not only get world-class software but also the dedicated expertise needed to succeed in highly regulated and mission-critical industries."
            }
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-lg border bg-background p-5">
            <h3 className="font-medium">Expert Architectural Guidance</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Reference architectures tailored to your constraints, with patterns for scale, resilience, and security.
            </p>
          </li>
          <li className="rounded-lg border bg-background p-5">
            <h3 className="font-medium">Hands-on Implementation & Integration</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Embedded engineers to stand up clusters, pipelines, and observability with your CI/CD and control planes.
            </p>
          </li>
          <li className="rounded-lg border bg-background p-5">
            <h3 className="font-medium">Priority Feature Development</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Roadmap influence and prioritized features aligned to your operational and regulatory needs.
            </p>
          </li>
          <li className="rounded-lg border bg-background p-5">
            <h3 className="font-medium">Enterprise-Grade SRE & Support</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              SLAs, runbooks, and performance tuning with reliability engineering focused on uptime and cost.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}