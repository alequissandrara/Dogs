import React from "react";
import Enviar from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import styles from "./PhotoCommentsForms.module.css";

const PhotoCommentsForms = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <img src={Enviar} alt="Enviar" />
      </button>
      {error && (
        <p style={{ color: "#f31", margin: "1rem 0" }}>
          Efetue um novo comentário!
        </p>
      )}
    </form>
  );
};

export default PhotoCommentsForms;
