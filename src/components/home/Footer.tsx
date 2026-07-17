import Link from "next/link";

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/aman-raj-developer" },
  { label: "GitHub", href: "https://github.com/amanraj3103" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm font-semibold tracking-tight">AMAN RAJ</p><p className="mt-2 max-w-md text-sm text-zinc-500">Building AI-powered software that solves real business problems.</p><p className="mt-6 text-xs text-zinc-600">© 2026 Aman Raj</p></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">{footerLinks.map((link) => <Link key={link.label} href={link.href} className="rounded-sm text-sm text-zinc-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">{link.label}</Link>)}</nav>
      </div>
    </footer>
  );
}
