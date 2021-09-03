import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://nc-games-example-tnzlr.herokuapp.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <section>
        <ul className="list">
          {reviews.map((review) => {
            return (
              <div className="box">
                <li key={review.review_id}>
                  <h2 className="reviewTitle">{review.title}</h2>
                  <img
                    src={review.review_img_url}
                    alt={review.review_title}
                    width="150px"
                    height="150px"
                  />
                  <p className="category">Category: {review.category}</p>
                  <p>Author: {review.owner}</p>
                  <div>Date Posted: {review.created_at}</div>
                  <p>Votes: {review.votes}</p>
                  <Link to={`/api/reviews/${review.review_id}`}>
                    <button className="button">Read More...</button>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Reviews;
