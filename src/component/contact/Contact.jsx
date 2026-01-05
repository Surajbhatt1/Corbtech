import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="contact-page"
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <section className="contact-hero">
        <motion.div className="contact-hero-content" variants={fadeUp}>
          <h1>
            Get in <span className="highlight">Touch</span>
          </h1>
          <p>
            Let’s build innovative tech or plan your next Himalayan adventure
            together.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid">
          {/* LEFT INFO */}
          <motion.div className="contact-info" variants={fadeUp}>
            <h2>Contact Information</h2>
            <p>
              Reach out to CorbTech for startup solutions, collaborations, or
              tourism experiences across Uttarakhand & Himachal Pradesh.
            </p>

            <div className="info-item">
              <FaEnvelope />
              <span>contact@corbtech.in</span>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Pune, Maharashtra, India</span>
            </div>

            <div className="social-links">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            className="contact-form"
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
          >
            <h2>Send a Message</h2>

            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required />
            </div>

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
