import { BiRefresh } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import Carrousel from "../components/Carrousel";

import './homepage.css';

const HomePage = () => {
    return (
        <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Keem | Page d'accueil</title>
                </Helmet>

            <div className="PresentationSection">
                <div className="PresentationContent">
                    <h1>Bienvenue sur ce nouveau site de commerce</h1>
                    <p>
                        Découvrez notre collection exclusive de produits conçus pour répondre à vos besoins et à vos envies.
                        Profitez d'une expérience d'achat fluide grâce à des options de paiement sécurisées et une livraison rapide.
                        Rejoignez notre communauté et restez informé(e) des dernières tendances et offres !
                    </p>
                    <Link to={"/articles"}>
                        <Button>Voir La Collection</Button>
                    </Link>
                </div>
                <img src="../../public/item1.jpg" alt="default image" />
            </div>


            <section className="WhoWeAre">
                <h2>QUI SOMMES-NOUS</h2>
                <div className="WhoWeAreContent">
                    <img src="../../public/item2.jpg" alt="default image" />
                    <p>
                        Chez <strong>KEEM</strong>, nous sommes convaincus que de beaux cheveux peuvent transformer votre apparence et renforcer votre confiance en vous. Notre mission est simple:
                        proposer des extensions de qualité professionnelle conçues pour révéler la beauté naturelle de chaque femme.

                        Nous sélectionnons avec soin des cheveux 100% humains, doux, résistants et respectant leur texture d'origine.
                        Chaque produit est conçu pour offrir un volume naturel, une brillance incomparable et une expérience haut de gamme.
                    </p>
                    <img src="../../public/item3.jpg" alt="default image" />
                </div>
            </section>


            <section className="OursModels">
                <h2>NOS MODÈLES</h2>
                <div className="ModelsContent">
                    <Carrousel/>
                </div>
            </section>


            <section className="TrustPart">
                <div className="PAYRET">
                    <MdOutlinePayment className="svg"/>
                    <h3>PAIEMENT SÉCURISÉ</h3>
                </div>
                <div className="DELISERV">
                    <TbTruckDelivery className="svg"/>
                    <h3>LIVRAISON RAPIDE</h3>
                </div>
                <div className="PAYRET">
                    <BiRefresh className="svg"/>
                    <h3>SATISFAIT OU REMBOURCÉ</h3>
                </div>
                <div className="DELISERV">
                    <RiCustomerService2Line className="svg"/>
                    <h3>SERVICE CLIENT</h3>
                </div>
            </section>


            {/* <section className="WTSAU">
                <h2>CE QU'ILS DISENT DE NOUS</h2>
            </section> */}
        </div>
    )
}

export default HomePage;



const Button = styled.button `
    border-radius: 5px;
    border: none;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Montserrat';
    background-color: #d8b46f;
    cursor: pointer;
    transition: border-color 0.25s;
`;
export { Button };