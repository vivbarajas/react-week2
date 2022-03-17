import React from "react";
import MovieList from "./movie-list";
import Movie from "./movie";
import MovieTwo from "./movietwo";
import "./front-page.css"

export default class FrontPage extends React.Component{
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Movie Reviews</h1>
    <h3 className="lead">Almost like rotten tomatoes but better!</h3>
    <MovieList/>
  </div>
</div>

        )
    }
  }