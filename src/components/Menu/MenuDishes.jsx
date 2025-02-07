import styles from "./MenuPage.module.css";
import { useSelector } from "react-redux";
import DishCard from "./DishCard";

const MenuDishes = () => {
  const { dishes, activeCategory } = useSelector(
    (store) => store.menuCategories
  );

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className={styles.dishes}>
      {filteredDishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default MenuDishes;
