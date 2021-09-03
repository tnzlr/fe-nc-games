import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-games-example-tnzlr.herokuapp.com/api/reviews/${review_id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data.comments);
      });
  }, []);

  if (comments.length <= 0) {
    return (
      <div>
        <h2>No comments so far, click below to be the first!</h2>
        <Link to="/api/reviews/:review_id/comments/addComment">
          <button className="navButton">Post A Comment</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="list">
        <ul>
          {comments.map((comment) => {
            return (
              <section className="box">
                <li>
                  <h3>Author {comment.author}</h3>
                  <h4>Date Posted: {comment.created_at}</h4>
                  <p>{comment.body}</p>
                </li>
              </section>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Comments;
