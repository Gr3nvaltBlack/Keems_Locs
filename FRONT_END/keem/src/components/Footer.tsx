import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="info">
                <h3>INFORMATION</h3>
                <div className="info-list">
                    <ul>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                        <li>
                            <a href="">Politique d'expedition</a>
                        </li>
                        <li>
                            <a href="">Politique de confidentialité</a>
                        </li>
                        <li>
                            <a href="">Conditions d'utilisation</a>
                        </li>
                        <li>
                            <a href="">Politique de retour et de rembourcement</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="Social-Network">
                <h3>RÉSEAUX SOCIAUX</h3>
                <div className="Network-list">
                    <ul>
                        <li>
                            <a href=""><FaInstagram /></a>
                        </li>
                        <li>
                            <a href=""><FaTiktok /></a>
                        </li>
                        <li>
                            <a href=""><FaSnapchat /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="Contact">
                <h3>CONTACTEZ-NOUS</h3>
                <div className="Contact-info">
                    <p>adresse</p>
                    <p>numéro de téléphone</p>
                    <p>email</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;