import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Places from './pages/Places';
import Place from './pages/Place';
import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <a href="#content" className="skip-link">Skip to content</a>
            <Navbar />
            <div id="content">
                {/* Keying the routes on the path lets AnimatePresence play the exit animation. */}
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/places" element={<Places />} />
                        <Route path="/places/:slug" element={<Place />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </div>
            <Footer />
        </>
    );
}

export default App;
