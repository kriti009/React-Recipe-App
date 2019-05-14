import React , {Component} from 'react';
import Recipe from './Recipe';
import RecipeList from './recipeList';
import './RecipeApp.css';

class RecipeApp extends Component{
    render(){
        return(
            <div className="App">
                {/* <h1>Recipes goes here -></h1> */}
               <RecipeList />
                
            </div>
        );
    }
}
export default RecipeApp;