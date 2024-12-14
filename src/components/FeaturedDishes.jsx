import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/dish5.png";
import dish6 from "../assets/dish6.png";
import styles from "./FeaturedDishes.module.css";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Chilli Chicken",
      description:
        "Spicy and tangy chicken stir-fried with peppers, onions, and a flavorful soy-based sauce.",
      price: "$15",
      img: dish1,
    },
    {
      name: "Grilled Chicken Salad",
      description: "Fresh greens with perfectly grilled chicken.",
      price: "$17",
      img: dish2,
    },
    {
      name: "Prawn Fried Rice",
      description:
        "Long-grain rice stir-fried with juicy prawns, eggs, and veggies, seasoned with soy sauce.",
      price: "$20",
      img: dish3,
    },
    {
      name: "Cheesecake",
      description: "A creamy slice of indulgent cheesecake.",
      price: "$8",
      img: dish4,
    },
    {
      name: "Hot and Sour Soup",
      description:
        "A tangy and spicy soup made with mixed vegetables and flavorful Asian spices.",
      price: "$10",
      img: dish5,
    },
    {
      name: "Chilli Paneer",
      description:
        " Soft paneer cubes stir-fried with bell peppers, onions, and spicy sauces, served dry or with gravy.",
      price: "$15",
      img: dish6,
    },
  ];

  return (
    <section id={styles.featured_dishes}>
      <h2>
        <span>Today's Specials</span>
      </h2>
      <div className={styles.dish_cards}>
        {dishes.map((dish, index) => (
          <div key={index} className={`card ${styles.dish_card}`}>
            <img src={dish.img} className="card-img-top" alt={dish.name} />
            <div className="card-body">
              <h3 className="card-title">{dish.name}</h3>
              <p className={`card-text ${styles.dish_description}`}>
                {dish.description}
              </p>
              <span className={styles.dish_price}>{dish.price}</span>
              <div>
                <a
                  href="#"
                  className={`btn btn-primary ${styles.cta_btn} ${styles.order_now}`}
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.cta_btn} ${styles.view_menu}`}>
        View Full Menu
      </button>
    </section>
  );
};

export default FeaturedDishes;
