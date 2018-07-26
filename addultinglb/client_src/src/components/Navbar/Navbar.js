
import React, {Component} from 'react';


class Navbar extends Component {
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