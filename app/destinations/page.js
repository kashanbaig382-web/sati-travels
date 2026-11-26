
import { ArrowUpRight, Globe2, Plane } from "lucide-react";

export const metadata = {
  title: "Explore Destinations | Sati Travels",
  description:
    "Explore inspiring destinations around the world with Sati Travels Ltd.",
};

const destinations = [
  {
    country: "United Arab Emirates",
    name: "Dubai",
    description:
      "Discover modern architecture, luxury experiences and unforgettable city attractions.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85",
    tag: "City Escape",
  },
  {
    country: "Maldives",
    name: "Maldives",
    description:
      "Experience turquoise waters, beautiful islands and peaceful tropical surroundings.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=85",
    tag: "Island Escape",
  },
  {
    country: "France",
    name: "Paris",
    description:
      "Explore iconic landmarks, charming streets, art and unforgettable French culture.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=85",
    tag: "Cultural Journey",
  },
  {
    country: "Switzerland",
    name: "Swiss Alps",
    description:
      "Take in breathtaking mountain scenery, picturesque villages and scenic landscapes.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=85",
    tag: "Nature Escape",
  },
  {
    country: "Türkiye",
    name: "Istanbul",
    description:
      "Discover a fascinating blend of historic architecture, vibrant markets and culture.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=900&q=85",
    tag: "City & Culture",
  },
  {
    country: "Italy",
    name: "Rome",
    description:
      "Explore historic streets, remarkable architecture and the flavours of Italian life.",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=900&q=85",
    tag: "Historic Escape",
  },
];

export default function DestinationsPage() {
  return (
    <main className="destinations-page">
      <section className="destinations-hero">
        <div className="destinations-hero-content">
          <span className="destinations-eyebrow">
            <Globe2 size={17} /> DISCOVER THE WORLD
          </span>

          <h1>
            Explore Beyond
            <br />
            <span>Boundaries.</span>
          </h1>

          <p>
            From vibrant cities to peaceful escapes, discover destinations
            that inspire your next journey.
          </p>

          <a href="#all-destinations" className="destinations-hero-btn">
            Explore Destinations <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section className="destinations-intro" id="all-destinations">
        <div className="destinations-heading">
          <span className="section-eyebrow">
            <span /> FIND YOUR NEXT ESCAPE
          </span>
          <h2>Discover Amazing Places</h2>
          <p>
            Explore some of the world's most inspiring destinations and
            start planning a journey that suits you.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.name}>
              <div className="destination-image">
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                />
                <span className="destination-tag">
                  {destination.tag}
                </span>
              </div>

              <div className="destination-card-content">
                <span className="destination-country">
                  {destination.country}
                </span>

                <h3>{destination.name}</h3>

                <p>{destination.description}</p>

                <a
                  href={`mailto:Admin@satitravels.online?subject=${encodeURIComponent(
                    `Travel Enquiry - ${destination.name}`
                  )}&body=${encodeURIComponent(
                    `Hello Sati Travels,\n\nI would like to enquire about travelling to ${destination.name}, ${destination.country}.\n\nPlease share more details.\n\nThank you.`
                  )}`}
                  className="destination-link"
                >
                  Enquire Now <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destinations-cta">
        <div className="destinations-cta-icon">
          <Plane size={28} />
        </div>
        <h2>Your Next Adventure Starts Here</h2>
        <p>
          Have a destination in mind? Get in touch with our team to discuss
          your travel enquiry.
        </p>
        <a href="mailto:Admin@satitravels.online">
          Plan Your Journey <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
