
"use client";

import { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  Users,
  ArrowLeftRight,
  Search,
  User,
  Mail,
  Phone,
} from "lucide-react";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("roundtrip");

  const [form, setForm] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    passengers: "1",
    name: "",
    email: "",
    phone: "",
  });

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const swapLocations = () => {
    setForm((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.from.trim().toLowerCase() === form.to.trim().toLowerCase()) {
      alert("Departure and destination must be different.");
      return;
    }

    if (form.departure < localToday) {
      alert("Please select a valid departure date.");
      return;
    }

    if (
      tripType === "roundtrip" &&
      form.returnDate < form.departure
    ) {
      alert("Return date cannot be before departure.");
      return;
    }

    const subject = "New Flight Booking Inquiry - Sati Travels";

    const message = `
NEW FLIGHT INQUIRY

Customer Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Trip Type: ${tripType}
Departure From: ${form.from}
Destination: ${form.to}
Departure Date: ${form.departure}
Return Date: ${tripType === "roundtrip" ? form.returnDate : "One Way"}
Passengers: ${form.passengers}

Please contact this customer regarding their flight inquiry.
`;

    window.location.href =
      `mailto:Admin@satitravels.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flight-panel">
      <div className="flight-panel-top">
        <div>
          <span className="flight-label">FLIGHT RESERVATIONS</span>
          <h2>Book Your Next Journey</h2>
        </div>

        <span className="flight-panel-tag">
          <PlaneTakeoff size={17} />
          Start Your Journey
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="trip-options">
          <label>
            <input
              type="radio"
              checked={tripType === "roundtrip"}
              onChange={() => setTripType("roundtrip")}
            />
            Round Trip
          </label>

          <label>
            <input
              type="radio"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            />
            One Way
          </label>
        </div>

        {/* FLIGHT DETAILS */}

        <div className="booking-grid">
          <div className="flight-field">
            <label>Departure From</label>
            <div className="field-input">
              <PlaneTakeoff size={19} />
              <input
                placeholder="Departure From"
                value={form.from}
                onChange={(e) => update("from", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flight-field">
            <label>Destination</label>
            <div className="field-input">
              <PlaneLanding size={19} />
              <input
                placeholder="Destination"
                value={form.to}
                onChange={(e) => update("to", e.target.value)}
                required
              />
              <button
                type="button"
                className="swap-btn"
                onClick={swapLocations}
                aria-label="Swap locations"
              >
                <ArrowLeftRight size={17} />
              </button>
            </div>
          </div>

          <div className="flight-field">
            <label>Departure Date</label>
            <div className="field-input">
              <CalendarDays size={19} />
              <input
                type="date"
                min={localToday}
                value={form.departure}
                onChange={(e) => update("departure", e.target.value)}
                required
              />
            </div>
          </div>

          {tripType === "roundtrip" && (
            <div className="flight-field">
              <label>Return Date</label>
              <div className="field-input">
                <CalendarDays size={19} />
                <input
                  type="date"
                  min={form.departure || localToday}
                  value={form.returnDate}
                  onChange={(e) => update("returnDate", e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="flight-field">
            <label>Number of Passengers</label>
            <div className="field-input">
              <Users size={19} />
              <select
                value={form.passengers}
                onChange={(e) => update("passengers", e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <option key={n} value={n}>
                    {n} Passenger{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* CUSTOMER DETAILS */}

        <div className="customer-grid">
          <div className="flight-field">
            <label>Full Name</label>
            <div className="field-input">
              <User size={19} />
              <input
                type="text"
                placeholder="Enter Full Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flight-field">
            <label>Email Address</label>
            <div className="field-input">
              <Mail size={19} />
              <input
                type="email"
                placeholder="Enter Email Address"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flight-field">
            <label>Phone Number</label>
            <div className="field-input">
              <Phone size={19} />
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="flight-submit">
            Search Flights
            <Search size={19} />
          </button>
        </div>

        <p className="booking-note">
          Submit your travel details and our team will
          contact you with available flight options.
        </p>
      </form>
    </div>
  );
}
