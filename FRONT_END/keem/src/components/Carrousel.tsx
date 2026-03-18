import  "react-responsive-carousel/lib/styles/carousel.min.css" ;
import  {  Carousel  }  from  'react-responsive-carousel' ;
import { useEffect, useState } from "react";
import { GetCards, type PaginationResponse } from "../services/articleService";

import './components.css'

const Carrousel = () => {
    const [datas, setDatas] =useState<PaginationResponse>()

    const handleImage = async() => {
        try {
            const response = await GetCards();
            if(!response) return;
            setDatas(response)
            console.log(response)
        } catch(error) {
            return;
        }
    }
    useEffect(() => {
        handleImage()
    }, [])

    return (
        <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
        >
            {datas?.results.map( data =>
                <img src={`http://localhost:8000/${data.picture}`} alt="" className="carrrousel-image"/>
            )}
        </Carousel>
    )
}

export default Carrousel;