import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/api/reviews">
        <button className="navButton">Reviews</button>
      </Link>
      <Link to="/api/users">
        <button className="navButton">Users</button>
      </Link>
    </div>
  );
};

export default Nav;
