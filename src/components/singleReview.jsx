import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleReview = (props) => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    fetch(
      `https://nc-games-example-tnzlr.herokuapp.com/api/reviews/${review_id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleReview(data.review);
      });
  }, []);

  return (
    <section className="list">
      <ul className="largeBox">
        <li>
          <h2>{singleReview.title}</h2>
          <h3>Author:{singleReview.owner}</h3>
          <img
            className="imageLeft"
            src={singleReview.review_img_url}
            alt={singleReview.title}
          />
          <h3>About the Game:</h3>
          <p>Category: {singleReview.category}</p>
          <p>Designer: {singleReview.designer}</p>
          <p>Votes: {singleReview.votes}</p>
          <div className="reviewBodyBox">
            <strong>Review:</strong>
            <br></br>
            {singleReview.review_body}
          </div>

          <h3>Comments:</h3>
          <Link to={`/api/reviews/${singleReview.review_id}/comments`}>
            Check out the comments for this review here! <br></br> So far we
            have {singleReview.comment_count}, why don't you say your piece?
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SingleReview;
