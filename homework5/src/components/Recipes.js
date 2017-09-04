import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/recipes';

class Recipes extends Component {

  renderIngredients = (id) => {
    const { ingredients } = this.props;
    const recipeIngredients = ingredients.filter(item => item.recipeId === id);
    return recipeIngredients.map((item, index) => (<li key={index}><span>{item.name}</span><span>{item.quantity}</span></li>));
  }

  renderActiveRecipe = () => {
    const { activeRecipe, recipes, ingredients } = this.props;
    console.log(this.props);
    const recipe = recipes.find(item => item.id === activeRecipe);
    return (<div>
      <h3>{recipe.name}</h3>
      <div>{this.renderIngredients(activeRecipe)}</div>
    </div>)
  }

  renderRecipes = () => {
    const { recipes, ingredients, activeRecipe, setActiveRecipe, deleteRecipe } = this.props;
    console.log(this.props);
    return recipes.map((recipe, index) => {
      if (recipe.id !== activeRecipe) {
        return (<li key={index} >
          <div onClick={() => setActiveRecipe(recipe.id)}>
            <h5>{recipe.name}</h5>
            <ul>{this.renderIngredients(recipe.id)}</ul>
          </div>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete recipe</button>
        </li>)
      }
    }
    );
  }

  render() {
    return (
      <div>
        <h1>
          Book of recipes:
        </h1>
        <div>{this.renderActiveRecipe()}</div>
        <h1>
          All recipes:
        </h1>
        <ul>{this.renderRecipes()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    recipes: state.recipesReducer.recipes,
    activeRecipe: state.recipesReducer.activeRecipe,
    ingredients: state.recipesReducer.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Recipes
);
