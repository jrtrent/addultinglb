import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./Home.css";
import Login from "../Login";
import SignupForm from '../SignupForm';


const Home = () => (
    
    <div className="row">
    <div className="col s12 m5">
      <div className="card-panel teal">
        <span className="white-text">
        <SignupForm/>
        </span>
      </div>
    </div>
    <div className="col s12 m5">
      <div className="card-panel teal">
        <span className="white-text">
        <Login />
        </span>
      </div>
    </div>
  </div>
           
    
    
             
                
)                 
              
        

    
    
  
  
  



export default Home