import LeftNavbar from "../../components/Leftnavbar";

import "./authPage.css";

const PasswordPage = () => {
  return (
    <div className="password-page-container">
        <div className="left-navbar-part">
            <LeftNavbar />
        </div>

        <div className="right-password-part">
            <h2>Mot de passe</h2>
            <div className="password-part">
                <div className="intro-password-part">
                    <p>
                    Choisissez un mot de passe suffisamment complexe pour protéger
                    votre compte. Après modification, certaines connexions à des
                    services partenaires pourront être réinitialisées.
                    </p>
                    <span>Tous les champs sont obligatoires.</span>
                </div>

                <div className="actual-password">
                    <h3>Mot de passe actuel</h3>
                    <input type="password" required />
                </div>

                <div className="new-password">
                    <h3>Nouveau mot de passe</h3>
                    <input type="password" required />
                    <div className="password-recommendation">
                        <span>Une majuscule</span>
                        <span>Une minuscule</span>
                        <span>Un chiffre</span>
                        <span>Un caractère spécial</span>
                        <span>8 caractères min.</span>
                    </div>
                </div>

                <div className="confirm-new-password">
                    <h3>Confirmation du nouveau mot de passe</h3>
                    <input type="password" required/>
                </div>
            </div>
        </div>
    </div>
  );
};
export default PasswordPage;
