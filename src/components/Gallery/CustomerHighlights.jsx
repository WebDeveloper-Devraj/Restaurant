import { useSelector } from "react-redux";
import styles from "./Gallery.module.css";

const CustomerHighlights = () => {
  const { galleryImages: images } = useSelector(
    (store) => store.galleryCategories
  );

  return (
    <section className={styles.customerHighlightsSection}>
      <h2>Customer Highlights</h2>
      <p>Tag us @krishnaRestaurant to get featured in our gallery!</p>
      <div className={styles.customerGallery}>
        {/* Placeholder for customer images */}
        {images.map((image, index) => (
          <div key={index} className={styles.customerItem}>
            <img src={image.img} alt={`Customer ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerHighlights;
