import styles from "./ContactUs.module.css";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
