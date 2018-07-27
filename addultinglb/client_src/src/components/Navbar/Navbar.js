
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';


class Navbar extends Component {

    Logout() {
        axios.post("http://localhost:3000/api/Users/logout")
           .then(response => {
    
            this.props.history.push('/')
        }).catch(err=>console.log(err));

    } //push is where it is redirected to. 
    handleClick = (e) => {
        e.preventDefault();
       
        const User = {
            username: this.refs.username.value,
            email:this.refs.email.value,
            password: this.refs.password.value
            

        }
        this.Login(User);
       
    }

    render() {
        return (
            <div>
                 <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    
                    <a href="/menu" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/dailytasks">Dailytasks</a></li>
                        <li><a href="/dailytasks/add">Add Dailytasks</a></li>
                        <li><a href="/About">About</a></li>
                        <li> <Button onClick={this.Logout}>LogOut</Button></li>
                    
                        
                    </ul>
                    </div>
                   
                </nav>
            

                <ul className="sidenav" id="mobile-demo">
                <li><a href="/">Home</a></li>
                        <li><a href="/dailytasks">Dailytasks</a></li>
                        <li><a href="/dailytasks/add">Add Dailytasks</a></li>
                        <li><a href="/About">About</a></li>
                </ul>
            </div>
  
        )
    }
}
export default Navbar;