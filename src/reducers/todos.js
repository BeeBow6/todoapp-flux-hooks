/**
 * TODOの追加と切替
 */
import { TodoActionTypes } from '../actions';

const todos = (state, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TodoActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
