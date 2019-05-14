import React, {Component} from 'react';
import Hobbies from './hobbies.js';
import './Pet.css';

class Pet extends Component {
    render(){
        return (
            <div className = "card">
                <h2 className="name">Moxie</h2>
                <img src="https://cdn.pixabay.com/photo/2016/03/09/15/30/puppy-1246689_960_720.jpg" alt='yo'></img>
                <Hobbies></Hobbies>
            </div>
           
        )
    }
}

export default Pet;