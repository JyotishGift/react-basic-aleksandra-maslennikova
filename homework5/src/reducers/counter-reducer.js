import { DEC, INC, CLEAR_HISTORY, DELETE_DUBLICATES } from '../actions/types';

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
    case CLEAR_HISTORY: {
      return { ...state, history: [] };
    }
    case DELETE_DUBLICATES: {
      const newHistory = [...state.history];
      const filteredHistory = newHistory.filter((item, index, arr) => arr.indexOf(item) === index);
      return { ...state, history: filteredHistory };
    }
    default:
      return state;
  }
};

export default reducer;
