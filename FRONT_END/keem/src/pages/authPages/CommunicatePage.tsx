import { useState } from "react";
import LeftNavbar from "../../components/Leftnavbar";
import "./authPage.css";

const CommunicatePage = () => {
    const [toogle1, setToogle1] = useState(false);
    const [toogle2, setToogle2] = useState(false);
    const [toogle3, setToogle3] = useState(false);
    const [toogle4, setToogle4] = useState(false);

    const [t1, setT1] = useState(false);
    const [t2, setT2] = useState(false);
    const [t3, setT3] = useState(false);
    const [t4, setT4] = useState(false);

    return (
        <div className="communication-page-container">
            <div className="left-navbar-part">
                <LeftNavbar/>
            </div>

            <div className="communication-part">
                <h2>Communication</h2>
                <div className="communicate-received">
                    <p>
                        Profitez de conseils personnalisés,
                        donnez votre avis pour faire évoluer nos offres et restez informé
                        de nos nouveautés et événements exclusifs.
                    </p>
                    <div className="preference-communication-container">
                        <div className="toogle">
                            <p>TEXT</p>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={toogle1} onClick={()=>{
                                    setToogle1(!toogle1)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                                    <hr />
                        <div className="toogle">
                            <p>TEXT</p>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={toogle2} onClick={()=>{
                                    setToogle2(!toogle2)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                                    <hr />
                        <div className="toogle">
                            <p>TEXT</p>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={toogle3} onClick={()=>{
                                    setToogle3(!toogle3)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                                    <hr />
                        <div className="toogle">
                            <p>TEXT</p>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={toogle4} onClick={()=>{
                                    setToogle4(!toogle4)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>

                    </div>
                </div>


                <div className="means-of-communication">
                    <p>
                        Si vous avez donné votre consentement,
                        nous pouvons vous envoyer des communications via différents canaux,
                        configurables à tout moment.
                    </p>
                    <div className="communication-choice-container">

                        <div className="toogle">
                            <span>Email</span>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={t1} onClick={()=>{
                                    setT1(!t1)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                                    <hr />
                        <div className="toogle">
                            <span>SMS</span>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={t2} onClick={()=>{
                                    setT2(!t2)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                                <hr />
                        <div className="toogle">
                            <span>WhatsApp</span>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={t3} onClick={()=>{
                                    setT3(!t3)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>
                                <hr />
                        <div className="toogle">
                            <span>Telegram</span>
                            <label className="switch-communicate">
                                <input type="checkbox" checked={t4} onClick={()=>{
                                    setT4(!t4)
                                }}/>
                                <span className="slider"></span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunicatePage;