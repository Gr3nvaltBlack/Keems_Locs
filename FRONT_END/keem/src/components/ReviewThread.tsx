import { useState } from "react";
import { LuSend } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { PostReview, type ReviewResponse } from "../services/articleService";

import ReviewCard from "./ReviewCard";
import styled from "styled-components";

import './components.css'

const ReviewThread = ({content} : {content:  ReviewResponse[] | undefined}) => {
    const [newText, setNewText] = useState('')
    const [newRating, setNewRating] = useState<ReviewResponse["rating"]>(0)

    const submitReview = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await PostReview(newText, newRating);
            if(!response) {
                return;
            }
        } catch(error) {

        }
    }


    return (
        <div className="review-thread-container">
            <div className="review-thread-content">
                {content?.map( data => 
                <ReviewCard info={data}/>
            )}
            </div>

            <form action="" onSubmit={submitReview}
                className="review-thread-submit"
            >
                <input
                    type="text"
                    placeholder="Ajoutez un commentaire pour cet article..."
                    onChange={(e) => setNewText(e.target.value)}
                    value={newText}
                />
                <ReviewSubmit type="submit"><LuSend/></ReviewSubmit>

                <div className="review-thread-rating">
                    <h2>RATING</h2>
                    <div className="rating-part">
                        <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewThread;

const ReviewSubmit = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #e5c1a3;
    cursor: pointer;
`;
export { ReviewSubmit }