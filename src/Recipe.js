import React , {Component} from 'react';
import './Recipe.css'

class Recipe extends Component{
    render(){
        const {title, instruction, img} = this.props;
        const ingredients = this.props.ingredients.map((h,i) => (
           <li key={i}> {h} </li> 
        ));
        return(
            <div className="recipe-card">
                <div className='recipe-card-img'>
                    <img src={img} alt={title}></img>
                </div>
                <div className='recipe-card-content'>
                    <h3 className='recipe-title'>{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        <li>{ingredients}</li>
                    </ul>
                    <h4>Instructions :</h4>
                    <div>{instruction}</div>
                </div>
                
            </div>
        );
    }
}
export default Recipe;