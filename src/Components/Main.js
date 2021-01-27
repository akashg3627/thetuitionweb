import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Header from './Header';
import About from './About';
import Contact from './Contact';

function Main(props) {
    return (
        <div>
        <Header />
        <Switch >
            <Route path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
        </div>
    );
}

export default Main;