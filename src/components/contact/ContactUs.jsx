import React from "react";
import styles from "./ContactUs.module.css";
import contactHero from "../../assets/contactUs/contactHero.png";

const ContactUs = () => {
  return (
    <div className={styles.contactUsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <img src={contactHero} alt="contact image" />
          <h1>Contact Us</h1>
          <p>
            We’re here to help! Get in touch with us for any queries or
            feedback.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className={styles.contactDetailsSection}>
        <h2>Our Contact Information</h2>
        <p>Feel free to reach out to us using any of the methods below:</p>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <h3>Email</h3>
            <p>krishna292@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Phone</h3>
            <p>+91 9321892873</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Address</h3>
            <p>Sariput nagar, MIDC andheri(E), mumbai-400093</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <h2>Send Us a Message</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.formInput}
              placeholder="name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.formInput}
              placeholder="e-mail"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="review">Your Message</label>
            <textarea
              id="review"
              rows="4"
              required
              className={styles.formTextarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
