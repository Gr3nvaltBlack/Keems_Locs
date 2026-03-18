// import { useAuth } from "../Context/AuthContext";
import { Helmet } from "react-helmet";

import Thread from "../components/Thread";

const ListArticle = () => {
    // const { logout } = useAuth();
    return (
            <div className="container" style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%",
                minHeight: "100vh",
                }}>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Keem | Nos Articles</title>
                    </Helmet>

                <Thread/>
            </div>
    )
};

export default ListArticle;