"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function BookingForm() {
  const [status, setStatus] = useState("Choose your details and submit a demo booking request.");

  return (
    <form
      className="booking-form dark-panel"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("Demo request captured. In production this will send the booking to Number10.");
      }}
    >
      <div>
        <p className="eyebrow">Booking open</p>
        <h2>Make your appointment</h2>
        <p>{status}</p>
      </div>

      <div className="form-grid">
        <input className="form-field" name="name" placeholder="Full name" required />
        <input className="form-field" name="phone" placeholder="Phone number" required />
        <select className="form-field" name="service" defaultValue="" required>
          <option value="" disabled>
            Select service
          </option>
          <option>Signature Cut</option>
          <option>Skin Fade</option>
          <option>Beard Trim</option>
          <option>Executive Groom</option>
        </select>
        <input className="form-field" name="date" type="date" required />
        <input className="form-field" name="time" type="time" required />
        <textarea className="form-field" name="notes" placeholder="Notes or preferred barber" rows={4} />
      </div>

      <button className="form-submit" type="submit">
        Send Booking Request <Send size={18} />
      </button>
    </form>
  );
}
