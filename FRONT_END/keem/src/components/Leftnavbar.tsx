import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

import styled from "styled-components";

import './navigate.css'
import { GetAuthUser, type AuthResponse } from "../services/api";
import { useEffect, useState } from "react";


const LeftNavbar = () => {
    const { logout, authToken }= useAuth();
    const [profile, setProfile] = useState<AuthResponse>()

    const handleConnect = async() => {
        try {
            const response = await GetAuthUser(authToken!)
            if(!response) return;
            setProfile(response)
        } catch (error) {
            return;
        }

    }

    useEffect(() => {
        console.log(authToken)
        if (!authToken) return;
        handleConnect()
    }, [authToken])


    return (
        <div className="left-nav-conatiner">
            <div className="left-nav-header">
                <h2>{profile?.username}</h2>
                <span>{profile?.email}</span>
            </div>
            
            <nav className="left-navlink">
                <div className="achats">
                    <h3>Mes Achats</h3>
                    <LeftNav end to={""}>
                        <span>Mon historique d'achats</span>
                    </LeftNav>

                    <LeftNav end to={""}>
                        <span>Informations de paiement</span>
                    </LeftNav>

                    <LeftNav end to={""}>
                        <span>Retours</span>
                    </LeftNav>
                </div>

                <div className="compte-fidelite">
                    <h3>Mon compte fidélité</h3>
                    <LeftNav end to={""}>
                        <span>Carte de fidélité</span>
                    </LeftNav>

                    <LeftNav end to={""}>
                        <span>Mon historique de points</span>
                    </LeftNav>
                </div>

                <div className="profile">
                    <h3>Mon profil</h3>
                    <LeftNav end to={"/auth/profile"}>
                        <span>Informations personnelles</span>
                    </LeftNav>

                    <LeftNav end to={""}>
                        <span>Carnet d'adresses</span>
                    </LeftNav>

                    <LeftNav end to={"/auth/password"}>
                        <span>Mot de passe</span>
                    </LeftNav>

                    <LeftNav end to={"/auth/communication"}>
                        <span>communication</span>
                    </LeftNav>
                    <LeftNav end to={""}>
                        <span>Mes Favoris</span>
                    </LeftNav>
                </div>

                <div className="decouvrir">
                    <h3>Découvrir</h3>
                    <LeftNav end to={""}>
                        <span>Sites et applications</span>
                    </LeftNav>
                    <LeftNav end to={""}>
                        <span>Personnalisation</span>
                    </LeftNav>
                </div>

                <p>Numéro de carte:</p>

                <LogoutButton onClick={ logout }>Me déconnecter</LogoutButton>
                
            </nav> 
        </div>
    )
}

export default LeftNavbar;


const LeftNav = styled(NavLink) `
    line-height: 1.8;
    width: 90%;

    &:hover {
        background-color: #e5c1a3;
        opacity: 0.8;
        border-radius: 15px;
        color: #000;
    }
`;
export { LeftNav};


const LogoutButton = styled.button `
    height: 30px;
    width: 80%;
    font-family: var(--text-font);
    background-color: var(--button-bg-color);
    color: #000;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 1rem;
    transition: 0.4s;
    &:hover {
        opacity: 0.8;
        transform: scale(1.01)
    }
`;
export { LogoutButton };