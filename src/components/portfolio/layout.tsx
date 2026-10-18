import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
] as const;
export function Socials() {
  return (
    <div className="socials">
      <Button asChild variant="ghost" size="icon">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sunil Pal on GitHub"
          title="GitHub"
        >
          <Github />
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sunil Pal on LinkedIn"
          title="LinkedIn"
        >
          <Linkedin />
        </a>
      </Button>
      <Button asChild variant="ghost" size="icon">
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sunil Pal on LeetCode"
          title="LeetCode"
        >
          <Code2 />
        </a>
      </Button>
    </div>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Link to="/" className="wordmark" aria-label="Sunil Pal home">
            <span className="brand-symbol">
              s<span>.</span>
            </span>
            <span>
              sunil<span className="text-primary">.</span>pal
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={pathname === n.to ? "nav-link active" : "nav-link"}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="outline" className="nav-contact">
            <Link to="/contact">
              Let's talk <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link to="/" className="wordmark">
          sunil<span className="text-primary">.</span>pal
        </Link>
        <p>© {new Date().getFullYear()} Sunil Pal. Built with curiosity.</p>
        <div className="footer-links">
          <Link to="/certifications">Workshops</Link>
          <Link to="/profiles">Coding profiles</Link>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
