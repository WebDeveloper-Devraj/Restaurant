import styles from "./Testimonials.module.css";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Carter",
      text: "This restaurant has redefined my dining experience! From the first bite to the last, everything was just perfect. Highly recommended for food lovers.",
      image: person1,
    },
    {
      name: "Michael Johnson",
      text: "The service was impeccable, and the food was beyond delicious. I can't wait to visit again and try more of their dishes!",
      image: person2,
    },
    {
      name: "Sophia Martinez",
      text: "The flavors here are so authentic and fresh! The atmosphere makes it even better. It’s my go-to place for family dinners.",
      image: person3,
    },
    {
      name: "Aarav Sharma",
      text: "Absolutely incredible! The presentation and taste of each dish are outstanding. The staff is friendly and attentive. A must-visit restaurant!",
      image: person1, // Replace with a unique image if available
    },
    {
      name: "Mira Patel",
      text: "Loved every bit of my experience here. The variety on the menu caters to everyone, and the desserts are heavenly. Can't wait to bring my friends next time!",
      image: person3, // Replace with a unique image if available
    },
  ];

  return (
    <section id={styles.testimonials}>
      <h2>
        <span>What Our Customers Say</span>
      </h2>
      <div className={styles.testimonial_cards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial_card}>
            <img src={testimonial.image} alt={testimonial.name} />
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
