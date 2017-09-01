import { DEC, INC } from '../actions/types';

const initialState = {
  counter: 0,
  history: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      const newHistory = [...state.history];
      const newCounter = state.counter + 1;
      newHistory.push(newCounter);
      return { ...state, counter: newCounter, history: newHistory };
    }
    case DEC: {
      const newHistory = [...state.history];
      const newCounter = state.counter - 1;
      newHistory.push(newCounter);
      return { ...state, counter: newCounter, history: newHistory };
    }
    default:
      return state;
  }
};

export default reducer;
