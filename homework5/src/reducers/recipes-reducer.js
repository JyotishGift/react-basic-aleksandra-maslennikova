import { SET_ACTIVE_RECIPE, DELETE_RECIPE } from '../actions/recipes/types';;

const initialState = {
  recipes: [
    {
      id: 1,
      name: 'Pizza',
      ingredients: [
        { name: "ketchup", quantity: '20мл' },
        { name: "cheese", quantity: '50g' },
        { name: "salami", quantity: '100g' }
      ]
    },
    {
      id: 2,
      name: 'Chicken',
      ingredients: [
        { name: "chicken", quantity: '1' },
        { name: "sous", quantity: '50g' },
        { name: "salt", quantity: '5g' }
      ]
    },
    {
      id: 3,
      name: 'Soup',
      ingredients: [
        { name: "water", quantity: '2 liters' },
        { name: "chicken", quantity: '500g' },
        { name: "potato", quantity: '5p' }
      ]
    },
    {
      id: 4,
      name: 'Risotto',
      ingredients: [
        { name: "water", quantity: '0.5 liters' },
        { name: "rice", quantity: '100g' },
        { name: "salt", quantity: '5g' }
      ]
    },
    {
      id: 5,
      name: 'Salad',
      ingredients: [
        { name: "salad", quantity: '100g' },
        { name: "tomato", quantity: '300g' },
        { name: "pepper", quantity: '200g' }
      ]
    }
  ],
  activeRecipe: 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_RECIPE: {
      return { ...state, activeRecipe: action.payload };
    }
    case DELETE_RECIPE: {
      const newRecipes = [...state.recipes];
      const index = newRecipes.findIndex(elem => elem.id === action.payload);
      newRecipes.splice(index, 1);
      return { ...state, recipes: newRecipes };
    }
    default:
      return state;
  }
};

export default reducer;