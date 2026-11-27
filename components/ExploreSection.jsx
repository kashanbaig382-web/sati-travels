
import {
  ArrowUpRight,
  Plane,
  Hotel,
  Globe2,
  BriefcaseBusiness,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    description: "Experience luxury, adventure and iconic skylines.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
    tag: "CITY ESCAPE",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    description: "Discover turquoise waters and tropical escapes.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
    tag: "BEACH PARADISE",
  },
  {
    name: "Paris",
    country: "France",
    description: "Explore timeless beauty and romantic streets.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
    tag: "CULTURAL ESCAPE",
  },
  {
    name: "Switzerland",
    country: "Europe",
    description: "Experience breathtaking mountain landscapes.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85",
    tag: "NATURE & ADVENTURE",
  },
];

const services = [
  {
    icon: Plane,
    title: "Flight Reservations",
    description:
      "Explore flight options and get assistance planning your next journey.",
  },
  {
    icon: Globe2,
    title: "Worldwide Travel",
    description:
      "Discover destinations and plan journeys across the globe.",
  },
  {
    icon: Hotel,
    title: "Hotel Assistance",
    description:
      "Get help exploring accommodation options for your trip.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Travel Planning",
    description:
      "Get personalised assistance with your travel arrangements.",
  },
];

export default function ExploreSection() {
  return (
    <>
      {/* DESTINATIONS */}

      <section className="destinations-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                <span /> DISCOVER THE WORLD
              </span>

              <h2>
                Destinations Worth
                <br />
                <span>Exploring.</span>
              </h2>

              <p>
                From iconic city skylines to peaceful tropical
                escapes, find inspiration for your next adventure.
              </p>
            </div>

            <a
              href="https://wa.me/447460003094"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              Explore With Us
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <article className="destination-card" key={destination.name}>
                <img
                  src={destination.image}
                  alt={`${destination.name} travel destination`}
                  loading="lazy"
                />

                <div className="destination-overlay" />

                <div className="destination-content">
                  <span className="destination-tag">
                    {destination.tag}
                  </span>

                  <div>
                    <span className="destination-country">
                      {destination.country}
                    </span>

                    <h3>{destination.name}</h3>

                    <p>{destination.description}</p>

                    <a
                      href={`https://wa.me/447460003094?text=${encodeURIComponent(
                        `Hello Sati Travels, I would like to enquire about ${destination.name}. Please share more details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${destination.name}`}
                      className="destination-arrow"
                    >
                      <ArrowUpRight size={21} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="section-container">

          <div className="services-heading">
            <span className="section-eyebrow">
              <span /> WHAT WE OFFER
            </span>

            <h2>
              Everything You Need
              <br />
              <span>For Better Travel.</span>
            </h2>

            <p>
              Thoughtful travel assistance to help make
              every journey easier to plan.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">
                    <Icon size={27} />
                  </div>

                  <span className="service-number">
                    0{index + 1}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href="https://wa.me/447460003094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    Learn More
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="service-promise">
            <div className="promise-item">
              <ShieldCheck size={22} />
              <span>Personalised Assistance</span>
            </div>

            <div className="promise-item">
              <Headphones size={22} />
              <span>Dedicated Travel Support</span>
            </div>

            <div className="promise-item">
              <Globe2 size={22} />
              <span>Worldwide Destinations</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
