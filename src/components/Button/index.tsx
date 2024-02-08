import React from "react";
import styles from "./Button.module.css";

type TButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<TButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
