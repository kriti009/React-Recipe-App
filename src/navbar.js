import React , {Component} from 'react';
import './navbar.css';
class Navbar extends Component{
    render(){
        return(
            <div className="header">
                <h2><a href="/">Recipe App</a></h2>
                <nav>
                    <li>New Recipe</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </nav>
            </div>
        );
    }
}
export default Navbar;