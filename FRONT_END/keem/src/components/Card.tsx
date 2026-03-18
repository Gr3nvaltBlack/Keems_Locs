import {
    LinkStyled,
    ButtonStyled,
    ButtonStyledOff
} from "../styled-components/StyledFile";

import { type ArticleResponse } from "../services/articleService";
import { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

import './components.css'


const Card = ({ info } : {info: ArticleResponse}) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className="card-container">

            <div className="card-header">
                <div className="inStock"
                    style={ info?.stock? 
                        {backgroundColor: "green"} : {backgroundColor: "red"}}
                >
                    {info?.stock ? 
                        <CiCircleCheck/> : <CiCircleRemove/>
                    }
                </div>

                <FaHeart className="heart-svg"
                    onClick={() => {
                        setLiked(!liked)
                    }}
                    style={liked ? {color: "red"} : {}}
                />
            </div>

            <LinkStyled to={`/article/${info?.id}`}>

                <div className="card-img-container">
                    <img src={`http://localhost:8000/${info?.picture}`} className="card-img" />
                </div>
                    <h3>{info?.title}</h3>
                    <h4>{info?.price} € </h4>
            </LinkStyled>
            
            {info.stock ? 
            <ButtonStyled>Ajouter au Panier</ButtonStyled> : 
            <ButtonStyledOff>Ajouter au Panier</ButtonStyledOff>
            }
        </div>
    )
};

export default Card;
