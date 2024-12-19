import styles from "./Gallery.module.css";

const GallerySubmition = () => {
  return (
    <section className={styles.submissionSection}>
      <h2>Submit Your Photos</h2>
      <form className={styles.submissionForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="review">Description</label>
          <textarea id="review" rows="4" required></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="photo">Upload Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default GallerySubmition;
