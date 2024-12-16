import React from "react";
import styles from "./AboutUs.module.css";
import AboutUsHero from "./AboutUsHero";
import Story from "./Story";
import SignatureCuisine from "./SignatureCuisine";
import Team from "./team";
import Review from "./Review";
import Faq from "./Faq";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsPage}>
      <AboutUsHero />
      <Story />
      <SignatureCuisine />
      <Team />
      <Review />
      <Faq />
    </div>
  );
};

export default AboutUs;
