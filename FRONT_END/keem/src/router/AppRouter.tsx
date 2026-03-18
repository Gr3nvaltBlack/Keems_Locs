import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import Article from '../pages/Articles';
import ListArticle from '../pages/ListArticles';
import Profile from '../pages/authPages/Profile';
import DashbordAdmin from '../pages/DashbordAdmin';
import PasswordPage from '../pages/authPages/PasswordPage';
import CommunicatePage from '../pages/authPages/CommunicatePage';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage/>} index/>
                <Route path='/article/:id' element={<Article/>}/>
                <Route path='/articles' element={<ListArticle/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path= '/register' element={<Register/>}/>

                <Route path='/admin/dashbord' element={<DashbordAdmin/>}/>

                <Route path='/auth/profile' element={<Profile/>}/>
                <Route path='/auth/password' element={<PasswordPage/>}/>
                <Route path='/auth/communication' element={<CommunicatePage/>}/>
            </Routes>
            <Footer />
        </Router>
    );
};

// const AppLog = () => {
//     return (
//         <Router>
//             <Routes>
//             </Routes>
//         </Router>
//     );
// };

export default AppRouter;
// export {
//     AppLog
// }