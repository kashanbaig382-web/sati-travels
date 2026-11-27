
import {
  ArrowUpRight,
  Plane,
  Globe2,
  ShieldCheck,
  Headphones,
  MapPin,
  Mail,
  Phone,
  Building2,
  Compass,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Globe2,
    title: "Global Travel Options",
    description:
      "Explore destinations and travel possibilities across the world.",
  },
  {
    icon: Headphones,
    title: "Personalised Assistance",
    description:
      "Get dedicated assistance when planning your travel arrangements.",
  },
  {
    icon: ShieldCheck,
    title: "Customer-Focused Service",
    description:
      "We aim to make your travel planning experience clear and convenient.",
  },
  {
    icon: Compass,
    title: "Journey Planning",
    description:
      "Find travel options that suit your destination and journey requirements.",
  },
];

export default function CompanySections() {
  return (
    <>
      {/* ABOUT US */}

      <section className="about-section" id="about">
        <div className="company-container about-grid">

          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1100&q=85"
              alt="Traveller exploring a beautiful destination"
              loading="lazy"
            />

            <div className="about-image-caption">
              <Plane size={23} />
              <div>
                <strong>Explore Beyond Limits</strong>
                <span>Your journey starts here</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-eyebrow">
              <span /> ABOUT SATI TRAVELS
            </span>

            <h2>
              Making Every
              <br />
              Journey <span>Meaningful.</span>
            </h2>

            <p>
              At Sati Travels Ltd, we believe every journey
              begins with a dream. Our aim is to make travel
              planning easier by helping customers explore
              destinations and discover suitable travel options.
            </p>

            <p>
              Whether you are planning a holiday, a business
              trip or visiting somewhere new, we are here to
              assist you throughout your travel planning journey.
            </p>

            <a
              href="https://wa.me/447460003094"
              target="_blank"
              rel="noopener noreferrer"
              className="about-button"
            >
              Get to Know Us
              <ArrowUpRight size={19} />
            </a>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="why-section">
        <div className="company-container">

          <div className="why-heading">
            <span className="section-eyebrow">
              <span /> THE SATI EXPERIENCE
            </span>

            <h2>
              Why Travel With
              <br />
              <span>Sati Travels?</span>
            </h2>

            <p>
              Travel planning should feel simple, clear and
              exciting. Discover the assistance we aim to provide.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article className="benefit-card" key={benefit.title}>
                  <div className="benefit-icon">
                    <Icon size={27} />
                  </div>

                  <span className="benefit-number">
                    0{index + 1}
                  </span>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="travel-cta-section">
        <div className="company-container">
          <div className="travel-cta-box">
            <div>
              <span className="cta-eyebrow">
                YOUR NEXT ADVENTURE AWAITS
              </span>

              <h2>
                The World Is Waiting.
                <br />
                Where Will You Go?
              </h2>

              <p>
                Start planning your next journey with Sati Travels.
              </p>
            </div>

            <a
              href="https://wa.me/447460003094"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Plan Your Trip
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
