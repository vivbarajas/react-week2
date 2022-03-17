import React from "react";
import Stars from "./star-rating";
import UserReview from "./user-review";

export default class secondReview extends React.Component {
    render(){
        let secondReview = {
            username: "Viviana Barajas",
            reviewPara: "Romantic with a mix of halloween",
            starsGiven: <Stars idx="5" />
           }

           return(
            <div id="reviews">
                <div className="card">
                    <h4 className="card-title">
                        Name: {secondReview.username}
                    </h4>
                    <p>
                        {secondReview.reviewPara}
                    </p>
                    <div className="card-footer">
                        {secondReview.starsGiven}
                    </div>
                </div>
                <UserReview/>
            </div>
           )
    }
}