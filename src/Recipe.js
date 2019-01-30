import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired
  }
  render() {
    const {title, img} = this.props;
    const instructions = this.props.instructions.map((ins, i) => (
      <li key={i}>{ins}</li>      
    ));
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li> 
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <ul className="instructions-content">
            {instructions}
          </ul>
        </div>
        
      </div>
    );
  }
}

export {Recipe}