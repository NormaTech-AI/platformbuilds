import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight">
            {/* DevOps platforms that bridge Infrastructure, AI, and Observability */}
            Open platforms that bridge Infrastructure, AI, and Observability
          </h1>
          <p className="text-pretty mt-4 text-muted-foreground">
            PlatformBuilds delivers CNCF-aligned, privacy-first platforms for regulated industries—built to run
            airgapped, scale horizontally, and stay programmable.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="#flagships">Explore Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://github.com/PlatformBuilds" target="_blank" rel="noreferrer noopener">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
        <Illustration />
      </div>
    </section>
  )
}

function Illustration() {
  return (
    <div className="relative">
      <div className="aspect-square w-full rounded-xl border">
        {/* Decorative placeholder graphic */}
        <Image
          src="/hero.png"
          alt="DevOps systems diagram showing Kubernetes clusters, CI/CD pipeline, and observability streams (metrics, logs, traces) on a dark navy background with teal accents"
          className="h-full w-full rounded-xl object-contain"
          width={540}
          height={540}
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" aria-hidden />
    </div>
  )
}
