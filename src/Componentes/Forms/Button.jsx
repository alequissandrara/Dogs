import React from "react";
import styles from "../Forms/Button.module.css";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
