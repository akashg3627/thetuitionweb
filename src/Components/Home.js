import React from 'react';
import { Image } from 'react-bootstrap';
import view1 from '../images/akash.jpg';

function Home(props) {
    return (
        <div id="home" >
            <div className="row">
                <Image fluid src={view1} width="100%" height="700px" alt="abc" />
            </div>
            <div className="container bg-w tt-card tt-c-b">
                <figure className="text-center">
                    <blockquote className="tt-fs blockquote">
                        <p>In the digital era of learning where all works are being done virtually, so being part of this era
                            We introduce you all to a fully online platform of learning for classes 7th to 10th for both CBSE as well as ICSE boards. </p>
                    </blockquote>
                </figure>
            </div>
            <div className="container tt-card">
                <div className="row tt-c-b m-auto">Why Choose Us</div>
                <div className="row">
                    <div className="col-4 tt-c-b">
                        Personal Attention
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;