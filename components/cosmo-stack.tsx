import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CosmoStackSection() {
  return (
    <section id="cosmo-features" aria-labelledby="cosmo-features-title" className="border-t mt-5 pt-6">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 id="cosmo-features-title" className="text-balance text-3xl md:text-4xl font-semibold">
            Cosmo Stack: The unified network fabric for your data center
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            In today&apos;s data centers, network and platform teams often operate in separate worlds. Traditional
            networking is powerful but complex and slow to change, while Kubernetes networking is agile but confined to
            its own cluster. This silo creates friction and slows down innovation.
          </p>
          <p className="mt-4 leading-relaxed">
            Cosmo Stack bridges this gap. It&apos;s a network fusion layer that unifies your Kubernetes and Bare Metal
            infrastructure into a single, programmable, high-performance network fabric. Treat your entire data center
            as one cohesive cloud.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Feature
            title="Break down silos"
            desc="Create a seamless network layer that spans from your physical switches directly to your Kubernetes pods—so legacy and modern apps communicate effortlessly."
          />
          <Feature
            title="Automate with BGP"
            desc="Leverage industry-standard BGP for robust, scalable, automated routing across your data center—no brittle, manual workflows."
          />
          <Feature
            title="Declarative & agile"
            desc="Manage your network with simple, declarative APIs—aligning network operations with the same patterns used for cloud‑native apps."
          />
          <Feature
            title="High‑performance ready"
            desc="Built for demanding workloads—including AI/ML clusters, HPC, and large‑scale data services—with a focus on throughput and reliability."
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {/* Replace href with the announcement blog URL when available. */}
          <Button asChild>
            <Link href="#contact">Read the announcement</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border p-5">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}