import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, company, query } = (await req.json()) as {
      name?: string
      company?: string
      query?: string
    }

    const n = (name || "").trim()
    const c = (company || "").trim()
    const q = (query || "").trim()

    if (!n || !c || !q) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ message: "Email service is not configured." }, { status: 500 })
    }

    const to = [process.env.CONTACT_TO || "info@consultrnr.com", "rv@platformbuilds.org"]
    const from = process.env.CONTACT_FROM || "no-reply@platformbuilds.local"

    // Compose email content
    const subject = `[New Inquiry For PlatFormBuilds] From: ${n} (${c})`

    const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #1a1a1a;">New Website Inquiry</h2>
    <p>You have received a new message from your website's contact form.</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      <tr style="border-bottom: 1px solid #ddd;">
        <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
        <td style="padding: 8px;">${escapeHtml(n)}</td>
      </tr>
      <tr style="border-bottom: 1px solid #ddd;">
        <td style="padding: 8px; font-weight: bold;">Company:</td>
        <td style="padding: 8px;">${escapeHtml(c)}</td>
      </tr>
    </table>
    <h3 style="margin-top: 30px; color: #1a1a1a;">Query:</h3>
    <div style="background-color: #f9f9f9; border-left: 4px solid #ccc; padding: 15px; margin-top: 10px;">
      <p style="margin: 0;">${escapeHtml(q).replace(/\n/g, "<br/>")}</p>
    </div>
    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
    <p style="font-size: 12px; color: #888;">This email was sent from the PlatformBuilds website contact form.</p>
  </div>`
  
    // Send email using Resend REST API to avoid adding extra deps
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return NextResponse.json({ message: data?.message || "Failed to send email." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ message: "Unexpected error." }, { status: 500 })
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
