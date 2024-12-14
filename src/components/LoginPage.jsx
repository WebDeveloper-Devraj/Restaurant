import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import styles from "./LoginPage.module.css";

const LoginPage = ({ onClose, open, setOpen }) => {
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setOpen(true);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      setOpen(false);
    };
  }, []);

  return (
    <div className={`${styles.login_page} ${open && styles.open}`}>
      <div className={styles.login_content}>
        <div className={styles.close_icon} onClick={onClose}>
          <IoClose />
        </div>
        <div>
          <h2>Welcome Back!</h2>
          <p>Login to access your account</p>
          <form>
            <label htmlFor="email">What's your e-mail?</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Your password?</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className={styles.login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
