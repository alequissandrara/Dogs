import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForms from "./PhotoCommentsForms";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props, single) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForms id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
