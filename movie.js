import React from "react";
import Review from "./review";
import "./movie.css";
export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            movieCover: props.movieCover,
            movieSynopsis: props.movieSynopsis
        };
    }

    render() {

        
        const movieOne  = {
            title: "Alice in Wonderland:",
            movieCover: "https://upload.wikimedia.org/wikipedia/en/3/36/Alice_in_Wonderland_%282010_film%29.png",
            movieSynopsis: "A young girl when she first visited magical Underland, Alice Kingsleigh (Mia Wasikowska) is now a teenager with no memory of the place -- except in her dreams. Her life takes a turn for the unexpected when, at a garden party for her fiance and herself, she spots a certain white rabbit and tumbles down a hole after him. Reunited with her friends the Mad Hatter (Johnny Depp), the Cheshire Cat and others, Alice learns it is her destiny to end the Red Queen's (Helena Bonham Carter) reign of terror."
        };
        
    

   
    
    return (
        <div className="container" > 
        <h2>
           <b>{movieOne.title}</b>
        </h2>
        <div id="display_image" align='center'>
        <img src={movieOne.movieCover}></img>
        </div>
        
        <p>
            {movieOne.movieSynopsis}
        </p>
        <div className="container">
        <Review />
        </div>
        </div>
        
    )
    }
}

