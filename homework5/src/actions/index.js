// action-creator
import { DEC, INC } from './types';

export const increment = () => {
  return { type: INC };
};

// action-creator
export const decrement = () => {
  return { type: DEC };
};
