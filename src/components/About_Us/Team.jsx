import styles from "./AboutUs.module.css";

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <h2>Meet the Team</h2>
      <div className={styles.teamMembers}>
        <div className={styles.teamMember}>
          <img src="" alt="Chef John" />
          <h3>Chef John Doe</h3>
          <p>Master of spices and our head chef for over a decade.</p>
        </div>
        <div className={styles.teamMember}>
          <img src="" alt="Chef Jane" />
          <h3>Chef Jane Smith</h3>
          <p>Pastry specialist, crafting desserts that delight every palate.</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
