import React from "react";
import styles from "./Footer.module.css";
import dogFooter from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={dogFooter} className={styles.imgFooter} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
