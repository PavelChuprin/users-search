import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.block}>
        <img width={50} height={50} src="img/logo.png" alt="logo" />
        <div>
          <h3 className={styles.title}>Users-Search</h3>
          <p className={styles.text}>search for users on GitHub</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
