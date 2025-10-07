"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setError(null)

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get("name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      query: String(fd.get("query") || "").trim(),
    }

    try {
      const res = await fetch("/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || "Failed to send message")
      }
      setStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (err: any) {
      setStatus("error")
      setError(err?.message || "Something went wrong")
    }
  }

  return (
    <>
      <div id="contact-us" className="mb-24 -mt-24"></div>
    <section
      aria-labelledby="contact-heading"
      className={cn("mx-auto max-w-2xl rounded-lg md:border p-6 md:p-8 container", className)}
    >
      <h2 id="contact-heading" className="text-balance text-2xl font-semibold tracking-tight">
        Contact Us
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us about your needs. We’ll get back within 1–2 business days.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" autoComplete="name" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company" autoComplete="organization" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="query">Query</Label>
          <Textarea id="query" name="query" placeholder="How can we help?" className="min-h-32" required />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send message"}
          </Button>
          {status === "success" ? <span className="text-sm text-green-600">Message sent. Thank you!</span> : null}
          {status === "error" ? (
            <span className="text-sm text-red-600" role="status" aria-live="polite">
              {error}
            </span>
          ) : null}
        </div>
      </form>
    </section>
    </>
  )
}
