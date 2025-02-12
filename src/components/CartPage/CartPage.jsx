import React from "react";
import styles from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart);
  const navigate = useNavigate();

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.pageBackground}>
      <div className={styles.cartContainer}>
        <h2 className={styles.cartHeading}>Your Order</h2>

        {cartItems.length === 0 ? (
          <center>Your cart is empty.</center>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <Link to={`/dish/${item.id}`} className={styles.link}>
                  <div key={item.id} className={styles.cartItem}>
                    <img src={item.img} alt={item.name} />
                    <div className={styles.details}>
                      <h3>{item.name}</h3>
                      <p>Price: ₹{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <hr />
                </Link>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <h3>Total: ₹{totalPrice}</h3>
              <button
                className={styles.checkoutButton}
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
