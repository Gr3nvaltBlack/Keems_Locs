import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Div, ButtonStyled } from "../styled-components/StyledFile";
import { type ArticleResponse, type ArticleResponseStock, GetCard } from "../services/articleService";

import ReviewThread from "../components/ReviewThread";
import './articles.css';


const Article = () => {
    const [articledata, setArticleData] = useState<ArticleResponse>()
    const [colors, setColors] = useState<ArticleResponseStock['color'][]>([])
    const [selectedColor, setSelectedColor] = useState<string>()
    const [selectedSize, setSelectedSize] = useState<number>()
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
    const [quantityMax, setQuantityMax] =useState<number>()
    const [articleStocks, setArticleStocks] = useState<ArticleResponseStock[]>([])

    const params = useParams()
    console.log(params.id)  

    const handleArticle = async() => {

        if(!params.id) return;
 
        try {
            const response = await GetCard(parseInt(params.id));
            if(!response) return;
            setArticleData(response)
        } catch (error) {
            return;
        }
    }


    useEffect(() => {
        handleArticle()
    }, [])


    useEffect(() => {
        const cache: string[] = []
        const base: ArticleResponseStock['color'][] = []
        articledata?.articleStock.map( data => {
            if(!cache.includes(data.color.hex_code)){
                base.push(data.color)
                cache.push(data.color.hex_code)
            }
        })
        setColors(base)
        if(base && base.length > 0) {
            setSelectedColor(base[0].name)
        }
    }, [articledata])



    useEffect(() => {
        const newBase: ArticleResponseStock[] = []
        articledata?.articleStock.map( data => {
            if(selectedColor == data.color.name ){
                newBase.push(data)
            }
            setArticleStocks(newBase)
        })
        if(newBase && newBase.length > 0) {
            setSelectedSize(newBase[0].size.size)
        }
    },[selectedColor])

    useEffect(() => {
        let newQuantity: number = 0
        articleStocks.map( data => {
            if(selectedColor == data.color.name && selectedSize == data.size.size){
                newQuantity = data.quantity
            }
            setQuantityMax(newQuantity)
        })
        setSelectedQuantity(1)
    }, [selectedColor, selectedSize])



    return (
        <Div className="article-container">

                {articledata && articledata?.title && (
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Keem | {`${articledata?.title}`}</title>
                    </Helmet>
                )}
            <div className="article-component">
           
                <div className="article-detail">
                    <img src={`http://localhost:8000/${articledata?.picture}`} />

                    <div className="article-info">

                        <h1>{articledata?.title}</h1>
            
                        <span className="article-price">
                            <h3>{articledata?.price} €</h3>
                        </span>

                        <span className="article-color-detail">
                            <h3>COLOR:</h3>
                            <ul>{colors.map( data => 
                                <li>
                                    <button
                                        onClick={ () => {
                                            setSelectedColor(data.name)
                                        }}

                                        className="color-hexa-code"
                                        style={{ backgroundColor: data?.hex_code }}
                                    >
                                    </button>
                                        
                                </li>
                            )}</ul>
                        </span>

                            {/* <div>{selectedColor}</div>
                            <div>{selectedSize || 'Aucune size selectionnée'}</div> */}

                        <span className="article-size-detail">
                            <h3>SIZE: </h3>
                            <select onChange={(e) => setSelectedSize(parseInt(e.target.value)) }>{articleStocks.map( data => 
                                <option value={data.size.size}>{data.size.size}</option>
                            )}
                            </select>
                        </span>

                        <span className="article-selected-quantity">
                            <div className="button-selected-part">
                            
                                <button onClick={() => {
                                    if(selectedQuantity && selectedQuantity > 1){
                                        setSelectedQuantity(selectedQuantity -1)
                                    }
                                    }}>-</button>
                                <div className="article-quantity">
                                    {selectedQuantity}
                                </div>
                                <button onClick={() =>{
                                    if(selectedQuantity && selectedQuantity < quantityMax!){
                                        setSelectedQuantity(selectedQuantity + 1)
                                    }
                                }}>+</button>

                            </div>
                            <ButtonStyled>AJOUTER AU PANIER</ButtonStyled>
                        </span>
 
                    </div>
                </div>

                <div className="article-description">
                    <h2>DESCRIPTION</h2>
                    <p>
                        {articledata?.description}
                    </p>
                </div>

            </div>






            {/* est ce que la partie suggestion n'est pas un composant ? */}
            {/* les reviews des articles au bas de la pages des articles why not */}


            <div className="article-review">
                <ReviewThread content={articledata?.reviews}/>
            </div>


        </Div>
    )
}

export default Article;