import { ButtonStyled } from '../styled-components/StyledFile';
import { useAuth } from '../Context/AuthContext';
import { PostLogin } from '../services/api';
import { Link } from "react-router-dom";
import { useState } from 'react';

import styled from "styled-components";

import './Log.css'


const Login = ()=> {
    const { login, authToken }= useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await PostLogin(email, password);
            if (!response) {
                return;
            }
            console.log(response)
            login(response["access"])
            // window.location.href = "/";
        } catch (error) {
            return { error: "An error has occurred" }
        }
    }

    return (
        <div className="log-container">
            <form action="" className="Formulaire" onSubmit={onSubmit}>
                <div className="text-intro">
                    <h2>Identifiez-vous</h2>
                </div>
                
                <div className='registration'>
                    <div className="username-info">
                        <h3>Username</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>


                    <div className="password-info">
                        <h3>Mot de passe</h3>
                        <input
                            type="password"
                            placeholder='Mot de passe'
                            required
                            // minLength={8}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                </div>

                <ButtonStyled type='submit'>Continuer</ButtonStyled>

                <div className="condition-of-use">
                    <p>
                        En appuyant sur Continuer, vous acceptez les <a href=''>conditions d'utilisation et de vente </a> de BLABLA.
                        Consultez notre <a href="">déclaration de confidentialité</a>, notre <a href="">politique relative aux cookies</a>.
                    </p>
                    <a href="">Vous avez besoin d'aide pour vous identifier ?</a>
                </div>
                {/* <hr />
                <div className="mybusiness">
                    <h3>Vous achetez pour votre entreprise ?</h3>
                    <a href="">Acheter sur BLBLBL Business</a>
                </div> */}
            </form>

            <div className="create-an-account">
                <h4>Nouveau chez Moi ?</h4>
            </div>
            <LoginPass to={"/register"}>Créer votre compte</LoginPass>
        </div>
    )
};

export default Login;

const LoginPass = styled(Link) `
    display: flex;
    justify-content: center;
    width: 380px;
    padding: 0.6em 1.2em;
    color: #000;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Montserrat';
    border-radius: 30px;
    cursor: pointer;
    background-color: #ffffff;
    text-decoration: none;
    box-shadow: 1px 2px 4px black;
`;

export { LoginPass };