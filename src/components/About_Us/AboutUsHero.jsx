import aboutUsHero from "../../assets/about us/aboutUsHero.mp4";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUsHero = () => {
  return (
    <section className={styles.hero_section}>
      {/* Background Video */}
      <div className={styles.video_background}>
        <video autoPlay muted loop>
          <source src={`${aboutUsHero}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for text visibility */}
      <div className={styles.overlay}></div>

      {/* Centered Content */}
      <div className={styles.content}>
        <h1>Welcome to Our Restaurant</h1>
        <p>Where passion meets flavor, and every dish tells a story.</p>

        {/* CTA Buttons */}
        <div className={styles.cta_buttons}>
          <button className={`${styles.cta_btn} ${styles.order_now}`}>
            Order Now
          </button>
          <Link to="/gallery">
            <button className={`${styles.cta_btn} ${styles.view_gallery}`}>
              View Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
