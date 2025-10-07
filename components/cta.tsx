import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-xl border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-balance text-xl md:text-2xl font-semibold tracking-tight">
            Ready to explore PlatformBuilds?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Browse the code, try Mirador-Core, or reach out to discuss enterprise deployment.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="https://github.com/PlatformBuilds" target="_blank" rel="noreferrer noopener">
              Visit GitHub
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#products">See Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
