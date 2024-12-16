import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import LoginPage from "../Login_SignUp/LoginPage";
import SignUpPage from "../Login_SignUp/SignUpPage";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scrollActions } from "../../store/scroll";
import { loginSignUpActions } from "../../store/loginSignUp";

const Header = () => {
  const dispatch = useDispatch();

  // to change background color of header when scrolled
  useEffect(() => {
    // adding handleScroll function to window at first time (useEffect)
    const handleScroll = () => {
      dispatch(scrollActions.setScrolled(window.scrollY > 50));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  // fetching scroll status from store
  const scrolled = useSelector((store) => store.scroll);

  // fetching login and signUp page status from store
  const { showLoginPage, showSignUpPage } = useSelector(
    (store) => store.loginSignUpUi
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : null}`}
      >
        <div className={styles.header_container}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src={logo} alt="Restaurant Logo" />
          </div>

          {/* Navigation Menu */}
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  About Us
                </NavLink>
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
            <button
              className={`btn ${styles.login}`}
              onClick={() => dispatch(loginSignUpActions.toggleLoginPage())}
            >
              Login
            </button>
            <button
              className={`btn  ${styles.signup}`}
              onClick={() => dispatch(loginSignUpActions.toggleSignUpPage())}
            >
              Sign Up
            </button>
          </div>
        </div>

        {showLoginPage && (
          <div className={styles.login_page}>
            <LoginPage />
          </div>
        )}

        {showSignUpPage && (
          <div className={styles.signUp_page}>
            <SignUpPage />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
