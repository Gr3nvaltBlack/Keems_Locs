import { type PaginationResponse, GetCards } from "../services/articleService";
import { useEffect, useState } from "react";

import styled from "styled-components";
import Card from "./Card";

import './components.css'


const Thread = () => {
    const [datas, setDatas] =useState<PaginationResponse>()
    
    const handleCard = async() => {
        try {
            const response = await GetCards();
            if(!response) return;
            setDatas(response)
        } catch(error) {
            return;
        }
    }

    useEffect(() => {
        handleCard()
    }, [])
    
    return (
        <div  className="thread-all-container">
            <div className="thread-container">
                    {datas?.results.map( data => 
                        <Card info={data}/>
                    )}
            </div>
            
            <div className="pagination-button-part">
                {datas?.previous ? 
                    <PrevAndNext>PREVIOUS</PrevAndNext> : null
                }
                
                {datas?.next ?
                    <PrevAndNext>NEXT</PrevAndNext> : null
                }
            </div>
            
        </div>   
    )
}

export default Thread;

const PrevAndNext = styled.button `
    width: 100px;
    border-radius: 15px;
    border: none;
    font-size: 1em;
    background-color: #e0b159ff;
    cursor: pointer;
`;
export { PrevAndNext }
