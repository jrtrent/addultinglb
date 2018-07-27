import React from 'react';
import {Container} from "../Grid";

const Home = () => {
    
    <Container fluid>
    <div className="row">
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src="images/sample-1.jpg" />
                    <span className="card-title">Get It Together</span>
                </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
                         <div className="card-action">
                            <a href="/login">Login</a>
                         </div>
                        <div className="card-action">
                            <a href="/SignupForm">Sign Up</a>
                        </div>
            </div>
        </div>
  </div>
  </Container>
  
  

}

export default Home;