
import { ArrowUpRight, ShieldCheck, Headphones, Globe2 } from "lucide-react";
import FlightSearch from "./FlightSearch";

export default function Hero() {
  return (
    <section className="travel-hero">
      <div className="hero-background" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            WELCOME TO SATI TRAVELS
          </div>

          <h1>
            The World Is
            <br />
            <span>Yours to Explore.</span>
          </h1>

          <p>
            From unforgettable escapes to your next big
            adventure, discover a better way to plan
            your journey with Sati Travels.
          </p>

          <a href="#flight-search" className="hero-explore">
            Plan Your Journey
            <ArrowUpRight size={20} />
          </a>

          <div className="hero-features">
            <span>
              <ShieldCheck size={18} />
              Travel with confidence
            </span>
            <span>
              <Headphones size={18} />
              Personalised assistance
            </span>
            <span>
              <Globe2 size={18} />
              Worldwide destinations
            </span>
          </div>
        </div>
      </div>

      <div className="hero-search-wrapper" id="flight-search">
        <FlightSearch />
      </div>
    </section>
  );
}
