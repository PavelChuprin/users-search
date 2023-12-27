import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, disabled, text }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
