import React from 'react';
import Footer from './Footer';
import Home from './Home';
import Header from './Header';
import About from './About';
import Contact from './Contact';

function Main(props) {
    return (
        <div>
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
        </div>
    );
}

export default Main;