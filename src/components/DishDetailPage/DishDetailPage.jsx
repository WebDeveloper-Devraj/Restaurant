import styles from "./DishDetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/cart";

const DishDetailPage = () => {
  const { id } = useParams();
  const dish = useSelector((store) =>
    store.featuredDishes.find((d) => d.id == id)
  );

  const cartItem = useSelector((store) =>
    store.cart.find((item) => item.id == id)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.pageBackground}>
      <div className={styles.dishDetailContainer}>
        <img src={dish.img} alt={dish.name} className={styles.dishImage} />
        <div className={styles.dishDetails}>
          <h2 className={styles.dishName}>{dish.name}</h2>
          <p className={styles.dishDescription}>{dish.description}</p>
          <p className={styles.dishInfo}>
            <strong>Price:</strong>{" "}
            <span className={styles.dishPrice}>{dish.price}</span>
          </p>
          <p className={styles.dishInfo}>
            <strong>Ingredients:</strong> Chicken, Peppers, Onions, Soy Sauce
          </p>
          <p className={styles.dishInfo}>
            <strong>Category:</strong> Non-Veg
          </p>
          {cartItem ? (
            <>
              <div className={styles.quantityContainer}>
                <button
                  className={styles.quantityButton}
                  onClick={() =>
                    dispatch(cartSliceActions.decreaseQuantity(cartItem.id))
                  }
                >
                  -
                </button>
                <span className={styles.quantityText}>{cartItem.quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() =>
                    dispatch(cartSliceActions.increaseQuantity(cartItem.id))
                  }
                >
                  +
                </button>
              </div>
              <a
                className={styles.goToCartButton}
                onClick={() => navigate("/cart")}
              >
                Go to Cart 🛒
              </a>
            </>
          ) : (
            <button
              className={styles.addToCartButton}
              onClick={() => dispatch(cartSliceActions.addItem(dish))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishDetailPage;
