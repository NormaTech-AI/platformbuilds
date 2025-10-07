import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/contact-us"
import CollaborationSection from "@/components/collaboration"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { MiradorHighlight } from "@/components/mirador-highlight"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <HeaderNav />
      <Hero />
      <TrustedBadges />
      <Features />
      <Products />
      <MiradorHighlight />
      <CollaborationSection />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}

function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          {/* <div aria-hidden className="h-7 w-7 rounded-md bg-primary" title="PlatformBuilds logo" /> */}
          {/* <span className="font-bold tracking-tight text-2xl md:text-3xl">PlatformBuilds</span> */}
          <Image
            src="/typo-logo.png"
            alt="PlatformBuilds logo"
            width={280}
            height={20}
            className="rounded-md brightness-0 md:brightness-100"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#mission" className="hover:underline">
            Mission
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#mirador" className="hover:underline">
            Mirador-Core
          </a>
          <a href="#contact-us" className="hover:underline">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="https://github.com/PlatformBuilds" target="_blank" rel="noreferrer noopener">
              GitHub
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#contact-us">Talk to us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function TrustedBadges() {
  const items = [
    { label: "Enterprise Ready", desc: "SLA & Support" },
    { label: "CNCF-aligned", desc: "Cloud Native first" },
    { label: "Airgapped Ready", desc: "Privacy-first" },
    { label: "Enterprise", desc: "LDAP / OAuth / RBAC" },
  ]
  return (
    <section aria-label="trust badges" className="border-y">
      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            <div>
              <p className="font-medium">{i.label}</p>
              <p className="text-muted-foreground text-xs">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
