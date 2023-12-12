import React from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, ...props }) => {
  const [skeleton, SetSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    SetSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default Image;
