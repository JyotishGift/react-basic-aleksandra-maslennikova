import { SET_ACTIVE_RECIPE, DELETE_RECIPE } from '../actions/recipes/types';;

const initialState = {
  recipes: [
    {
      id: 1,
      name: 'Pizza'
    },
    {
      id: 2,
      name: 'Chicken',
    },
    {
      id: 3,
      name: 'Soup',
    },
    {
      id: 4,
      name: 'Risotto',
    },
    {
      id: 5,
      name: 'Salad'
    }
  ],
  ingredients: [
    { name: "ketchup", quantity: '20мл', recipeId: 1 },
    { name: "cheese", quantity: '50g', recipeId: 1 },
    { name: "salami", quantity: '100g', recipeId: 1 },
    { name: "chicken", quantity: '1', recipeId: 2 },
    { name: "sous", quantity: '50g', recipeId: 2 },
    { name: "salt", quantity: '5g', recipeId: 2 },
    { name: "water", quantity: '2 liters', recipeId: 3 },
    { name: "chicken", quantity: '500g', recipeId: 3 },
    { name: "potato", quantity: '5p', recipeId: 3 },
    { name: "water", quantity: '0.5 liters', recipeId: 4 },
    { name: "rice", quantity: '100g', recipeId: 4 },
    { name: "salt", quantity: '5g', recipeId: 4 },
    { name: "salad", quantity: '100g', recipeId: 5 },
    { name: "tomato", quantity: '300g', recipeId: 5 },
    { name: "pepper", quantity: '200g', recipeId: 5 }
  ],
  activeRecipe: 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_RECIPE: {
      return { ...state, activeRecipe: action.payload };
    }
    case DELETE_RECIPE: {
      const newRecipes = [...state.recipes].filter(recipe => {
        if (recipe.id !== action.payload) {
          return { ...recipe }
        }
      });
      const newIngredients = [...state.ingredients].filter(ingredient => {
        if (ingredient.recipeId !== action.payload) {
          return { ...ingredient }
        }
      });
      return { ...state, recipes: newRecipes, ingredients: newIngredients };
    }
    default:
      return state;
  }
};

export default reducer;