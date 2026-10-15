import Link from "next/link";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/calendar", label: "Calendar" },
  { href: "/childrens_sunday_school", label: "Children" },
  { href: "/map_directions", label: "Visit" },
];

export function SiteHeader() {
  return (
    <>
      <div className="service-ribbon">
        <span>Sunday worship</span>
        <span>In person 10:00 AM <i /> Online 10:30 AM</span>
        <Link href="/map_directions">8412 W Washington St, Peoria, AZ <b aria-hidden="true">↗</b></Link>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Solid Rock Missionary Baptist Church home">
          <span className="brand__mark" aria-hidden="true"><span /></span>
          <span className="brand__name">
            <strong>Solid Rock</strong>
            <small>Missionary Baptist Church</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {primaryLinks.slice(0, 4).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          <Link className="nav-visit" href="/map_directions">Plan a visit <span aria-hidden="true">↗</span></Link>
        </nav>
        <details className="mobile-menu">
          <summary>Menu <span aria-hidden="true">＋</span></summary>
          <nav aria-label="Mobile navigation">
            {primaryLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            <Link href="/online_giving">Online giving</Link>
            <Link href="/our_history">Our history</Link>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand brand--footer" href="/">
        <span className="brand__mark" aria-hidden="true"><span /></span>
        <span className="brand__name">
          <strong>Solid Rock</strong>
          <small>Missionary Baptist Church</small>
        </span>
      </Link>
      <div className="site-footer__contact">
        <span>8412 W Washington St, Peoria, AZ 85345</span>
        <a href="tel:+16238474440">(623) 847-4440</a>
      </div>
      <nav className="site-footer__links" aria-label="Footer navigation">
        <Link href="/site_map">Site map</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
      <a className="site-footer__top" href="#top">Back to top ↑</a>
    </footer>
  );
}