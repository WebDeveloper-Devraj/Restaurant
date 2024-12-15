import { useDispatch, useSelector } from "react-redux";
import { categoriesSliceActions } from "../../store/categories";
import styles from "./MenuPage.module.css";

const CategoryButton = ({ category }) => {
  const dispatch = useDispatch();
  const { activeCategory } = useSelector((store) => store.categories);

  return (
    <button
      className={activeCategory === category ? styles.active : null}
      onClick={() => {
        dispatch(categoriesSliceActions.setActiveCategory(category));
      }}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
