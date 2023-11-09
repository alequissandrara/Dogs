import React from "react";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo }) => {
  // Verifica se a propriedade 'photo' é definida
  if (!photo) {
    return null; // Ou qualquer outra renderização ou tratamento desejado
  }

  return (
    <li className={styles.photo}>
      {/* Verifica se 'photo.src' é definido antes de acessá-lo */}
      {photo.src && <img src={photo.src} alt={photo.title} />}
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
