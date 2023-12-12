import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../Helper/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  // Verifica se a propriedade 'photo' é definida
  if (!photo) {
    return null; // Ou qualquer outra renderização ou tratamento desejado
  }

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      {/* Verifica se 'photo.src' é definido antes de acessá-lo */}
      {photo.src && <Image src={photo.src} alt={photo.title} />}
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
