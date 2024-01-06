import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Global Component
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Content Component
import Homepage from './components/Homepage';
import About from './components/About';

const Routers = () => {
    return (
        <Router>
            <div>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
};
export default Routers;