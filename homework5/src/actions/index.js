// action-creator
import { DEC, INC, CLEAR_HISTORY, DELETE_DUBLICATES } from './types';

export const increment = () => {
  return { type: INC };
};

// action-creator
export const decrement = () => {
  return { type: DEC };
};

export const clearHistory = () => {
  return { type: CLEAR_HISTORY };
};

export const deleteDublicates = () => {
  return { type: DELETE_DUBLICATES};
};
