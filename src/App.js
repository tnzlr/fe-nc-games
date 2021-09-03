import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Reviews from "./components/reviews";
import SingleReview from "./components/singleReview";
import Nav from "./components/nav";
import Comments from "./components/comments";
import Users from "./components/users";
import CreateComment from "./components/createComment";
import Home from "./components/home";
import SingleUser from "./components/singleUser";

const App = () => {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <section className="content">
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/api/reviews">
              <Reviews />
            </Route>
            <Route exact path="/api/reviews/:review_id">
              <SingleReview />
            </Route>
            <Route exact path="/api/reviews/:review_id/comments">
              <Comments />
            </Route>
            <Route exact path="/api/reviews/:review_id/comments/create">
              <CreateComment />
            </Route>
            <Route exact path="/api/users">
              <Users />
            </Route>
            <Route exact path="/api/users/:username">
              <SingleUser />
            </Route>
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
};

export default App;
