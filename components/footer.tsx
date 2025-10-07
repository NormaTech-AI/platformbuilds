export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PlatformBuilds. All rights reserved.</p>
        <nav className="flex gap-4">
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
      </div>
    </footer>
  )
}
