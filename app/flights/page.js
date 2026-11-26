
import FlightSearch from "@/components/FlightSearch";
import {
  Plane,
  Globe2,
  Headphones,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Flight Reservations | Sati Travels",
  description:
    "Plan your next journey with Sati Travels. Submit your flight inquiry and receive personalised travel assistance.",
};

const features = [
  {
    icon: Globe2,
    title: "Worldwide Destinations",
    description: "Explore travel options across international destinations.",
  },
  {
    icon: Headphones,
    title: "Personal Assistance",
    description: "Get support with your flight enquiry and travel plans.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Focused",
    description: "A straightforward and convenient enquiry experience.",
  },
];

export default function FlightsPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero flights-hero">
        <div className="inner-hero-content">
          <span className="inner-eyebrow">
            <Plane size={16} /> FLIGHT RESERVATIONS
          </span>

          <h1>
            Your Next Journey
            <br />
            <span>Starts Here.</span>
          </h1>

          <p>
            Tell us where you want to go. Our team is ready
            to assist with your flight enquiry and travel plans.
          </p>

          <a href="#flight-form" className="inner-hero-button">
            Request a Flight <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="flights-booking-section" id="flight-form">
        <div className="inner-section-heading">
          <span className="section-eyebrow">
            <span /> PLAN YOUR JOURNEY
          </span>
          <h2>Find Your Next Flight</h2>
          <p>
            Share your travel details and contact information
            to submit an enquiry to our team.
          </p>
        </div>

        <FlightSearch />
      </section>

      <section className="flight-benefits-section">
        <div className="company-container">
          <div className="inner-section-heading">
            <span className="section-eyebrow">
              <span /> TRAVEL WITH SATI
            </span>
            <h2>Here to Help You Travel</h2>
          </div>

          <div className="flight-benefits-grid">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <article className="flight-benefit-card" key={item.title}>
                  <div className="benefit-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
