
import Link from "next/link";
import {
  Plane,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-icon">
              <Plane size={27} />
            </span>
            <span>
              <strong>SATI<span>TRAVELS</span></strong>
              <small>EXPLORE BEYOND LIMITS</small>
            </span>
          </Link>

          <p>
            Discover new destinations and explore travel possibilities
            with Sati Travels. Your next journey starts here.
          </p>

          <a
            href="mailto:Admin@satitravels.online"
            className="footer-email"
          >
            <Mail size={17} />
            Admin@satitravels.online
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/flights">Flights</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <Link href="/flights">Flight Reservations</Link>
          <Link href="/destinations">Travel Destinations</Link>
          <Link href="/contact">Travel Enquiries</Link>
          <Link href="/contact">Customer Assistance</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>

          <div className="footer-contact-item">
            <MapPin size={19} />
            <p>
              Office 2254, 85 Dunstall Hill,
              Wolverhampton, England, WV6 0SR
            </p>
          </div>

          <div className="footer-contact-item">
            <Mail size={19} />
            <a href="mailto:Admin@satitravels.online">
              Send us an email
            </a>
          </div>

          <a
            href="mailto:Admin@satitravels.online"
            className="footer-talk"
          >
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sati Travels Ltd. All rights reserved.</p>
        <p>Company No. 17588388</p>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
