// action-creator
import { SET_ACTIVE_RECIPE, DELETE_RECIPE } from './types';

export const setActiveRecipe = (id) => {
  return { type: SET_ACTIVE_RECIPE, payload: id };
};

export const deleteRecipe = (id) => {
  return { type: DELETE_RECIPE, payload: id };
};