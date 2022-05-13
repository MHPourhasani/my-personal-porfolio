import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProjects from './components/MyProjects/MyProjects';
import MyServices from './components/MyServices/MyServices';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div id="Home" className="bg-darkBlueLg">
            <ToastContainer />

            <Header />
            <AboutMe />
            <MyProjects />
            <MyServices />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
