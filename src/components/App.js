import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieHome from "./movies/MovieHome";
import MovieDetail from "./movies/MovieDetail";
import MovieSearch from "./movies/MovieSearch";
import UserProfile from "./movies/UserProfile";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={MovieHome} />
            <Route path="/movie" exact component={MovieDetail} />
            <Route path="/search" exact component={MovieSearch} />
            <Route path="/user" exact component={UserProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
