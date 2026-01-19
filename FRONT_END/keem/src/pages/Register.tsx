import { ButtonStyled } from "../styled-components/StyledFile";
import { IoAlertCircle } from "react-icons/io5";
import { PostRegister } from "../services/api";
import { useState } from 'react';

import './Log.css'


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await PostRegister(name, email, password, confirmPassword);
            if(!response) {
                return;
            }
            if(confirmPassword !== password) {
                return 'bad'
            }
            // window.location.href = "/";
        } catch (error) {
            return { error }
        }
    }


    return (
        <div className="log-container">
            <form action="" className="Formulaire" onSubmit={onSubmit}>
                <div className="text-intro">
                    <h2>Créer un compte</h2>
                    <p>Tous les champs sont obligatoires</p>
                </div>

                <div className="registration">
                    <div className="username-info">
                        <h3>Username</h3>
                        <input
                            type="text"
                            placeholder="Prénom et nom"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>


                    <div className="email-info">
                        <h3>Adresse E-mail</h3>
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>


                    <div className="password-info">
                        <h3>Mot de Passe</h3>
                        <input
                            type="password"
                            placeholder="Au moins 8 caractères..."
                            required
                            minLength={8}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <div className="message-alert">
                            <IoAlertCircle/>
                            <i>Les mots de passe doivent au moins avoir 8 caractères.</i>
                        </div>
                    </div>


                    <div className="confirm-pass">
                        <h3>Confirmez votre Mot de passe</h3>
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Confirmez votre mot de passe"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                    </div>
                </div>
                <ButtonStyled type='submit'>Continuer</ButtonStyled>
                <hr />
                <p className="account-ownership">Vous possédez déjà un compte ? <a href="/login">Identifiez-vous</a></p>
            </form> 
        </div>
    )
};

export default Register;