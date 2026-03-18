import { FaStar } from "react-icons/fa";
import type {  ReviewResponse } from "../services/articleService";

import './components.css'

const ReviewCard = ({ info } : { info: ReviewResponse}) => {


    return(
        <div className="review-card-container">

            <div className="review-card-header">
                <h2>{info.user.username}</h2>
                <div className="review-rating">
                    {[... Array(5)].map( (element, idx) => {
                        if(info?.rating && idx) {
                            return <FaStar style={ {color: "gold"} }/> 
                        }    
                    })}
                </div>
            </div>

            <div className="review-content">
                <p>
                    {info?.text}
                </p>
            </div>

        </div>
    )
}

export default ReviewCard;