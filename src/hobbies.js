import React, {Component} from 'react';
// import './Pet.css';

class Hobbies extends Component {
    render(){
        const hobbies = ['slepping', 'eating', 'stalking'];
        return (
            <ul>
                {hobbies.map((h,i) => {
                    return <li key= {i}>{h}</li>
                })}
            </ul>
        )
    }
}

export default Hobbies;