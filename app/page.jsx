import Image from "next/image";
import Link from "next/link";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=8412+W+Washington+St+Peoria+AZ+85345";

export default function Home() {
  return (
    <main className="home-page" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy" id="main-content">
          <p className="eyebrow"><span /> Peoria, Arizona</p>
          <p className="hero__pastor">Rev. Dr. Kenneth A. Mitchell, Sr. <span>Pastor</span></p>
          <h1 id="hero-title">
            A place to
            <br />
            <em>belong.</em>
          </h1>
          <p className="hero__intro">
            Come as you are. Find a church family growing in faith, sharing
            hope, and making room for everyone.
          </p>
          <div className="hero__actions">
            <Link className="button button--solid" href="/map_directions">
              Plan your visit <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/about">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero__note">
            <span className="hero__note-mark" aria-hidden="true">✳</span>
            <span><strong>Sunday worship</strong><br />In person 10:00 AM · Online 10:30 AM</span>
          </div>
        </div>

        <div className="hero__visual">
          <Image
            className="hero__image"
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1800&q=85"
            alt="Sunlight filling a church sanctuary"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 53vw"
          />
          <div className="hero__image-shade" />
          <div className="hero__caption">
            <span className="hero__caption-rule" />
            <span>A community of faith in the West Valley</span>
          </div>
          <div className="hero__seal" aria-hidden="true">
            <span>ROOTED</span>
            <strong>in<br />faith</strong>
            <i>PEORIA · AZ</i>
          </div>
        </div>
        <span className="hero__side-label" aria-hidden="true">SOLID ROCK · PEORIA</span>
      </section>

      <section className="welcome" id="our-heart" aria-labelledby="welcome-title">
        <div className="welcome__label">
          <span className="section-index">01</span>
          <span className="eyebrow">A church family</span>
        </div>
        <div className="welcome__body">
          <h2 id="welcome-title">
            Built on faith.
            <br />
            <em>Open to all.</em>
          </h2>
          <p>
            Solid Rock Missionary Baptist Church is a place to worship, find
            encouragement, and walk alongside one another. Wherever you are
            on your journey, there is room for you here.
          </p>
          <a className="text-link text-link--light" href="#visit">
            Come meet us <span aria-hidden="true">→</span>
          </a>
        </div>
        <span className="welcome__sun" aria-hidden="true">✳</span>
      </section>

      <section className="community" id="community" aria-labelledby="community-title">
        <div className="community__heading">
          <div>
            <div className="welcome__label">
              <span className="section-index">02</span>
              <span className="eyebrow">Life together</span>
            </div>
            <h2 id="community-title">Faith is meant<br />to be <em>shared.</em></h2>
          </div>
          <p>
            We believe church is more than a Sunday gathering. It is the care
            we offer, the hope we share, and the neighbors we show up for.
          </p>
        </div>
        <div className="community__list">
          <Link className="community-item" href="/calendar">
            <span className="community-item__number">01</span>
            <h3>Worship</h3>
            <p>Join Sunday worship in person at 10:00 AM or online at 10:30 AM.</p>
            <span className="community-item__mark" aria-hidden="true">✳</span>
          </Link>
          <Link className="community-item" href="/ministries">
            <span className="community-item__number">02</span>
            <h3>Grow</h3>
            <p>Find Bible study, prayer, and ways to grow together in God&apos;s word.</p>
            <span className="community-item__mark" aria-hidden="true">✳</span>
          </Link>
          <Link className="community-item" href="/evangelism_outreach_10040">
            <span className="community-item__number">03</span>
            <h3>Serve</h3>
            <p>Put compassion into action for our church and Peoria community.</p>
            <span className="community-item__mark" aria-hidden="true">✳</span>
          </Link>
        </div>
        <div className="community__more">
          <Link className="text-link" href="/womens_ministry_1948">Women&apos;s Ministry <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/mens_ministry_10039">Men&apos;s Ministry <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/young_adult_ministry_1947">Young Adults <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/childrens_sunday_school">Children <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div className="visit__topline">
          <span className="section-index">03</span>
          <span className="eyebrow">Your next step</span>
        </div>
        <div className="visit__content">
          <div>
            <h2 id="visit-title">There’s a seat<br />here <em>for you.</em></h2>
            <p>
              We’d love to welcome you to Solid Rock. Join us in Old Town Peoria
              and experience the warmth of a church family.
            </p>
            <a className="button button--light" href={mapUrl} target="_blank" rel="noreferrer">
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="visit__aside">
            <span className="visit__cross" aria-hidden="true">✳</span>
            <p>8412 W Washington St<br />Peoria, AZ 85345</p>
            <a href="tel:+16238474440">(623) 847-4440</a>
          </div>
        </div>
      </section>

    </main>
  );
}