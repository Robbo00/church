import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { pageContent, staticPageSlugs } from "../site-content";

export function generateStaticParams() {
  return staticPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pageContent[slug];
  return page ? { title: `${page.title} | Solid Rock Missionary Baptist Church` } : {};
}

function PageSection({ section }) {
  return (
    <section className="interior-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      {section.quote && <blockquote>{section.quote}</blockquote>}
      {section.timeline && <ol className="timeline">{section.timeline.map((entry) => (
        <li key={entry.year}><span>{entry.year}</span><p>{entry.text}</p></li>
      ))}</ol>}
      {section.events && <div className="event-list">{section.events.map((event) => (
        <article className="event-row" key={`${event.date}-${event.title}`}>
          <time>{event.date}</time><strong>{event.title}</strong><span>{event.time}</span>
        </article>
      ))}</div>}
      {section.cards && <div className="page-cards">{section.cards.map((card) => (
        card.external ? (
          <a className="page-card" href={card.href} key={card.href} target="_blank" rel="noreferrer">
            <span className="page-card__arrow" aria-hidden="true">↗</span><h3>{card.title}</h3><p>{card.text}</p>
          </a>
        ) : (
          <Link className="page-card" href={card.href} key={card.href}>
            <span className="page-card__arrow" aria-hidden="true">↗</span><h3>{card.title}</h3><p>{card.text}</p>
          </Link>
        )
      ))}</div>}
      {section.links && <div className="page-links">{section.links.map((link) => (
        link.external ? (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>
        ) : (
          <Link href={link.href} key={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>
        )
      ))}</div>}
      {section.note && <p className="page-note">{section.note}</p>}
    </section>
  );
}

export default async function InformationPage({ params }) {
  const { slug } = await params;
  const page = pageContent[slug];

  if (!page) notFound();
  if (page.redirectTo) redirect(page.redirectTo);

  return (
    <main className="interior-page" id="top">
      <section className="interior-hero">
        <p className="eyebrow"><span />{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="interior-hero__intro">{page.intro}</p>
      </section>
      <div className="interior-body">
        <article className="interior-content" id="main-content">
          {page.sections?.map((section) => <PageSection section={section} key={section.heading} />)}
          {page.action && <a className="button button--solid interior-action" href={page.action.href} target={page.action.external ? "_blank" : undefined} rel={page.action.external ? "noreferrer" : undefined}>{page.action.label}<span aria-hidden="true">↗</span></a>}
        </article>
        <aside className="interior-aside">
          <p className="eyebrow">Join us this Sunday</p>
          <strong>In person · 10:00 AM</strong>
          <strong>Online · 10:30 AM</strong>
          <Link href="/map_directions">8412 W Washington St<br />Peoria, AZ 85345 <span aria-hidden="true">↗</span></Link>
          <Link className="aside-give" href="/online_giving">Support the ministry <span aria-hidden="true">↗</span></Link>
        </aside>
      </div>
    </main>
  );
}