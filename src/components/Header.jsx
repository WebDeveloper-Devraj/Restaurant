import React, { useEffect, useState } from "react";
import image from "../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  // to make responsive
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // to change background color of header when scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // Only update state if necessary
        setScrolled(window.scrollY > 50);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
        <div className={styles.header_container}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src={image} alt="Restaurant Logo" />
          </div>

          {/* Hamburger Icon */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span>☰</span>
          </div>

          {/* Navigation Menu */}
          <nav className={styles.navigation}>
            <ul className={menuOpen && styles.active}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className={styles.search_bar}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button type="button">Search</button>
          </div>

          {/* Action Buttons */}
          <div className={styles.action_buttons}>
            <button className={`btn ${styles.login}`}>Login</button>
            <button className={`btn  ${styles.signup}`}>Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
