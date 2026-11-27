
import {
  Globe2,
  Compass,
  HeartHandshake,
  ShieldCheck,
  ArrowUpRight,
  Plane,
} from "lucide-react";

export const metadata = {
  title: "About Us | Sati Travels Ltd",
  description:
    "Learn about Sati Travels Ltd, our approach to travel services and our commitment to helping customers plan their journeys.",
};

const values = [
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "We help customers explore travel possibilities across destinations around the world.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We value every enquiry and aim to provide a helpful, personalised experience.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We believe in clear communication and straightforward travel assistance.",
  },
  {
    icon: Compass,
    title: "Journey Focused",
    description:
      "From initial enquiries to travel planning, we aim to make the process simpler.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            <Plane size={17} /> ABOUT SATI TRAVELS
          </span>

          <h1>
            Connecting You
            <br />
            <span>To The World.</span>
          </h1>

          <p>
            Every journey begins with an idea. We are here to help you
            explore possibilities and plan your next travel experience.
          </p>

          <a href="#our-story" className="about-hero-btn">
            Discover Our Story <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section className="about-story" id="our-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1000&q=85"
            alt="Traveller exploring a new destination"
          />
          <div className="about-image-label">
            <span>YOUR JOURNEY</span>
            <strong>Our Priority</strong>
          </div>
        </div>

        <div className="about-story-content">
          <span className="section-eyebrow">
            <span /> WHO WE ARE
          </span>

          <h2>
            Travel Planning
            <br />
            With a <span>Purpose.</span>
          </h2>

          <p>
            Sati Travels Ltd is a travel company based in the United
            Kingdom. We aim to make exploring travel opportunities
            straightforward through helpful communication and customer-focused
            assistance.
          </p>

          <p>
            Whether you are considering an international trip or exploring
            your next destination, our goal is to help you take the next
            step with confidence.
          </p>

          <a
            href="https://wa.me/447460003094"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Us <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-content">
          <span className="about-eyebrow">
            OUR PURPOSE
          </span>
          <h2>Making Every Journey Easier to Explore.</h2>
          <p>
            Our mission is to help customers discover travel opportunities
            through accessible information, personalised assistance and
            a customer-first approach.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span className="section-eyebrow">
            <span /> WHAT MATTERS TO US
          </span>
          <h2>Our Values</h2>
          <p>
            The principles that guide how we approach every customer
            interaction and travel enquiry.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article className="about-value-card" key={item.title}>
                <div className="about-value-icon">
                  <Icon size={27} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-contact">
        <h2>Let's Plan Something Great.</h2>
        <p>
          Have a travel question or want to discuss your next journey?
          We would love to hear from you.
        </p>
        <a
          href="https://wa.me/447460003094"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}