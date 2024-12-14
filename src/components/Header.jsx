import React, { useEffect, useState } from "react";
import image from "../assets/logo.png";
import styles from "./Header.module.css";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // to make responsive header
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // to change background color of header when scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // to display login page
  const [showLoginPage, setShowLoginPage] = useState(false);

  const toggleLoginPage = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setShowLoginPage(!showLoginPage);
      }, 500);
    } else {
      setShowLoginPage(!showLoginPage);
    }
  };

  const [open, setOpen] = useState(false);

  // to display Sign up page
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const toggleSignUpPage = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setShowSignUpPage(!showSignUpPage);
      }, 500);
    } else {
      setShowSignUpPage(!showSignUpPage);
    }
  };

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
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive && styles.activeLink}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) => isActive && styles.activeLink}
                >
                  Menu
                </NavLink>
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
            <button className={`btn ${styles.login}`} onClick={toggleLoginPage}>
              Login
            </button>
            <button
              className={`btn  ${styles.signup}`}
              onClick={toggleSignUpPage}
            >
              Sign Up
            </button>
          </div>
        </div>

        {showLoginPage && (
          <div className={styles.login_page}>
            <LoginPage
              onClose={toggleLoginPage}
              open={open}
              setOpen={setOpen}
            />
          </div>
        )}

        {showSignUpPage && (
          <div className={styles.signUp_page}>
            <SignUpPage
              onClose={toggleSignUpPage}
              open={open}
              setOpen={setOpen}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
