import { MdSearch } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import './navigate.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                
                <div className="part1">
                    <NavLink to={"/articles"}>
                        <img src="../../public/logo_keem.png" alt="" />
                    </NavLink>
                    
                    <div className="search-bar">
                        <input type="text" placeholder="Rechercher"/>
                        <button>
                            <MdSearch />
                        </button>
                    </div>
                    {/* drapeau */}
                    <BsCart3 className="svg-icon"/>
                </div>

                <div className="part2">
                    <ul>
                        
                        <li>
                            <NavLink to="/nouveaute">NOUVEAUTÉ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/extensions">EXTENSIONS DE CHEVEUX</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a-propos">À PROPOS</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;