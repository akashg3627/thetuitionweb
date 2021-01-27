import React from 'react';
import rishabh from '../images/rishabh.jpg';

function About(props) {
    return (
        <div className="container">
            <div className="bg-w tt-card tt-c-b">
                <div className="row">
                    <div className="col-12 col-sm-5"><img src={rishabh} className="tt-img-f" alt="founder" width="80%" /></div>
                    <div className="col-12 col-sm-7 my-auto">

                    <h3 className="tt-fs-lg">Rishabh Gupta</h3>
                <span>Founder, The Tuition</span>
                <br></br>
                <p className="tt-m-10 tt-fs blockquote">
                    Welcome to The Tuition.
                    Get expertise in every concept of mathematics with an expert having an experience of more than 10 years.
                </p>
                    </div>
                </div>
            </div>
            <div className="bg-w tt-card tt-c-b">
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>"Chase the knowledge, marks and success will come automatically"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Rishabh Gupta
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default About;