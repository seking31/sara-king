import React, { useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/Navbar";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "sara@sara-king.com",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <div className="site-container">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="contact-form-container"
        aria-labelledby="contact-heading"
      >
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 id="contact-heading" className="text-2xl font-semibold mb-4">
            Contact
          </h1>

          {/* Describe what the form is for */}
          <p id="contact-description" className="contact-description">
            Use this form to send me a message. All fields are required.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            aria-describedby="contact-description form-status-message"
          >
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name<span aria-hidden="true"> *</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email<span aria-hidden="true"> *</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message<span aria-hidden="true"> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="input-field textarea"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSending}
            >
              {isSending ? "Sending…" : "Send"}
            </button>
          </form>

          {/* Status message region for screen readers */}
          <p
            id="form-status-message"
            className="mt-3 form-status"
            aria-live="polite"
          >
            {status === "sending" && (
              <span className="text-blue-600">Sending…</span>
            )}
            {status === "success" && (
              <span className="text-green-600">
                Message sent successfully!
              </span>
            )}
            {status === "error" && (
              <span className="text-red-600">
                Something went wrong. Please try again.
              </span>
            )}
          </p>
        </motion.div>
      </main>
    </div>
  );
}
