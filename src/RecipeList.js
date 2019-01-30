import React, {Component} from 'react';
import { Recipe } from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
            recipes: [{
                title: "Spaghetti",
                ingredients: ["Thick Noodles", "Meat Balls", "Ariabatta Sauce", "Sea Salt"],
                instructions: ["Bake the Meat Balls until ready", 
                                "Once the Meat Balls are ready put Ariabatta Sauce into a sauce pan on medium temp and add Meat balls to sauce immediately.", 
                                "Bring a large pot to a roaring boil, make sure to and a pinch or two of sea salt to add some flavor", 
                                "Add in noodles to to boil pot of water, let boil for 9 - 10 minutes", 
                                "Either mix all ingredients into one bowl, or Serve Seperately. Your Choice!"
                                ],
                img: "spaghetti.jpeg"
            }, 
            {
                title: "Pork Chops",
                ingredients: ["Pork Chops", "Johnny's Seasoning", "Pepper"],
                instructions: ["Start the BBQ",
                                "Wash, then season both sides of meat with Johnny's, Salt, and Pepper",
                                "Throw Pork Chops on the BBQ, cook is dependant on the thickness of the cut.", 
                                "Put a bushell of Asparagus with butter, and Johnnys wrapped in tin foil",
                                "Thinner cuts: 3 - 5 minutes on both sides, Medium cuts: 5 - 7 minutes, Thick Cuts: 7 - 10 minutes", 
                                "Add Asparagus to BBQ wrapped in tin foil, for 7 minutes"
                                ],
                img: "PorkChops.jpg"
            }, 
            {
                title: "Salmon",
                ingredients: ["Salmon", "Johnny's Seasoning", "Pepper", "Lemons"],
                instructions: ["Start the BBQ",
                                "Season the Salmon with Johnny's and Pepper. Then cut a lemon into thin slices and add to the top of salmon",
                                "Throw Pork Salmon on the BBQ, either on a cedar plank or wrapped in tin foil", 
                                "Let cook until fish looks done",
                                "Put a bushell of Asparagus with butter, and Johnnys wrapped in tin foil", 
                                "Add Asparagus to BBQ wrapped in tin foil, for 7 minutes"
                                ],
                img: "salmon.jpg"
            }]
        }
        
        static propTypes = {
            recipes: PropTypes.arrayOf(PropTypes.object).isRequired
        }
        
        render() {
            const recipes = this.props.recipes.map((r, i) => (
                    <Recipe key={i} {...r} />
                ));
                
            return(
                <div className="recipe-list">
                    {recipes}
                </div>    
            )
        }
}

export { RecipeList };