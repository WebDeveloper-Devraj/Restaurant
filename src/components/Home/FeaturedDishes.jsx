import { Link } from "react-router-dom";
import styles from "./FeaturedDishes.module.css";
import FeaturedDishCard from "./FeaturedDishCard";
import { useSelector } from "react-redux";

const FeaturedDishes = () => {
  const dishes = useSelector((store) => store.featuredDishes);

  return (
    <section id={styles.featured_dishes}>
      <h2>
        <span>Today's Specials</span>
      </h2>
      <div className={styles.dish_cards}>
        {dishes.map((dish, index) => (
          <FeaturedDishCard key={index} dish={dish} />
        ))}
      </div>

      <Link to="/menu">
        <button className={`${styles.cta_btn} ${styles.view_menu}`}>
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default FeaturedDishes;
