
"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Building2,
  Send,
  MessageCircle,
  Plane,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  function handleSubmit(e) {
    e.preventDefault();

    const message = `
*SATI TRAVELS - NEW WEBSITE ENQUIRY*

*Customer Details*
Name: ${form.name}
Email: ${form.email}

*Subject*
${form.subject}

*Message*
${form.message}

Please contact this customer regarding their enquiry.
`;

    const whatsappURL = `https://wa.me/447460003094?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  }


  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            <Plane size={17} /> GET IN TOUCH
          </span>
          <h1>
            Let's Start a
            <br />
            <span>Conversation.</span>
          </h1>
          <p>
            Have a travel enquiry or need assistance?
            We are here to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-info">
          <span className="section-eyebrow">
            <span /> CONTACT INFORMATION
          </span>
          <h2>We'd Love to Hear From You.</h2>
          <p>
            Send us your enquiry and get in touch with Sati Travels
            regarding your travel plans.
          </p>


          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MessageCircle size={23} />
            </div>
            <div>
              <h3>WhatsApp</h3>
              <a
                href="https://wa.me/447460003094"
                target="_blank"
                rel="noopener noreferrer"
              >
                +44 7460 003094
              </a>
            </div>
          </div>


          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={23} />
            </div>
            <div>
              <h3>Registered Office</h3>
              <p>
                Office 2254, 85 Dunstall Hill,
                Wolverhampton, England, WV6 0SR
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Building2 size={23} />
            </div>
            <div>
              <h3>Company Details</h3>
              <p>Sati Travels Ltd</p>
              <p>Company No. 17588388</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <MessageCircle size={25} />
            <div>
              <h2>Send Us a Message</h2>
              <p>Fill in the details below to make an enquiry.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Full Name
              <input
                type="text"
                placeholder="Enter your full name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </label>

            <label>
              Subject
              <input
                type="text"
                placeholder="What is your enquiry about?"
                required
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              />
            </label>

            <label>
              Your Message
              <textarea
                rows="5"
                placeholder="Write your message here..."
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </label>

            <button type="submit">
              Send via WhatsApp <Send size={18} />
            </button>

            <small>
              Your enquiry will open in WhatsApp, ready for you to send.
            </small>
          </form>
        </div>
      </section>
    </main>
  );
}
