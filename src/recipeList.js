import React , {Component} from 'react';
import Recipe from './Recipe';
import './recipeList.css';

class RecipeList extends Component{
    static defaultProps = {
        recipes : [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                img: "https://cdn.pixabay.com/photo/2017/02/26/13/00/pasta-2100171__340.jpg"
            },{
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "https://cdn.pixabay.com/photo/2015/11/23/11/54/chocolate-smoothie-1058191__340.jpg"
            },{
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "https://cdn.pixabay.com/photo/2014/09/22/14/49/fried-eggs-456351__340.jpg"
            }
        ]
    };
    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));
        return (
            <div className="RecipeList">
                {recipes}
            </div>
        )
    }
};

export default RecipeList;