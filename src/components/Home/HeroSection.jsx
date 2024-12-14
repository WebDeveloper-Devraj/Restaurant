import React from "react";
import styles from "./HeroSection.module.css";
import herosectionVideo from "../../assets/herosectionVideo.mp4";

const HeroSection = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section className={styles.hero_section}>
        {/* Background Video */}
        <div className={styles.video_background}>
          <video autoPlay muted loop>
            <source src={`${herosectionVideo}`} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        </div>

        {/* Overlay for text visibility */}
        <div className={styles.overlay}></div>

        {/* Centered Content */}
        <div className={styles.content}>
          <h1>Welcome to Our Restaurant</h1>
          <p>Your unforgettable dining experience starts here</p>

          {/* CTA Buttons */}
          <div className={styles.cta_buttons}>
            <button className={`${styles.cta_btn} ${styles.order_now}`}>
              Order Now
            </button>
            <button className={`${styles.cta_btn} ${styles.view_menu}`}>
              View Menu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
