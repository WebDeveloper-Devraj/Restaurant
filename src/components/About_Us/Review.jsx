import styles from "./AboutUs.module.css";

const Review = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <img src="" alt="Customer 1" />
          <blockquote>
            "The best dining experience I've ever had! The Chilli Paneer is a
            must-try."
          </blockquote>
          <p>- Sarah L.</p>
        </div>
        <div className={styles.testimonial}>
          <img src="" alt="Customer 2" />
          <blockquote>
            "A cozy atmosphere and food that feels like home. Highly
            recommended!"
          </blockquote>
          <p>- James P.</p>
        </div>
      </div>
    </section>
  );
};

export default Review;
