import Link from "next/link";

const links = [
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.14em]">
          Ark Team
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text">
              {link.label}
            </Link>
          ))}
        </div>
        <span>&copy; {new Date().getFullYear()} Ark Team</span>
      </div>
    </footer>
  );
}
