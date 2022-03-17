import React from "react";
import ReviewList from "./review-list";
import Stars from "./star-rating";
import UserReview from "./user-review";


export default class Review extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            reviewPara: props.reviewPara,
            starsGiven: props.starsGiven

        }
    }
    render() {
       let personalReview = {
            username: "Anonymous",
            reviewPara: "Great movie, great graphics",
            starsGiven: <Stars idx="5" />
           }
           
    return (
        <div id="reviews">
            <div className="card">
                <h4 className="card-title">
                    Name: {personalReview.username}
                </h4>
                <p>
                    {personalReview.reviewPara}
                </p>
                <div className="card-footer">
                    {personalReview.starsGiven}
                </div>
            </div>
            <UserReview />
        </div>
    );
    }
}