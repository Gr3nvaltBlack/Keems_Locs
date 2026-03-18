import LeftNavbar from "../../components/Leftnavbar";

import './authPage.css'

const Profile = () => {
    // const myfunction = () => {
        
    // }

    return (
        <div className="profile-page-container">
            <div className="left-navbar-part">
                <LeftNavbar/>
            </div>


            <div className="right-profile-part">
                <h2>Informations personnelles</h2>

                    <div className="identite">

                        <div className="username">
                            <div className="user-part">
                                <h3>Votre Nom</h3>
                                <span>username</span>
                            </div>
                        </div>
                                <hr />
                        <div className="date-of-birth">
                            <div className="birth-part">
                                <h3>Votre Nom</h3>
                                <span>username</span>
                            </div>
                        </div>
                                <hr />
                        <div className="gender">
                            <div className="gender-part">
                                <h3>Votre Nom</h3>
                                <span>username</span>
                            </div>
                        </div>
                                <hr />
                        <div className="phone-number">
                            <div className="phone-part">
                                <h3>Votre Nom</h3>
                                <span>username</span>
                            </div>
                        </div>
                                <hr />
                        <div className="email">
                            <div className="email-part">
                                <h3>Votre Nom</h3>
                                <span>username</span>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Profile;