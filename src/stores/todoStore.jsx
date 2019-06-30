import React, { useReducer, useContext } from 'react';
import { TodoActionTypes } from '../actions';

const Context = React.createContext();

// Reducer
const reducer = (state, action) => {
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

// Todos専用Provider
const TodosProvider = ({ children }) => {
  const contextValue = useReducer(reducer, []);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

// TodosのstateとDispatcherを提供するカスタムHook
const useTodos = () => {
  const contextValue = useContext(Context);
  return contextValue;
};

export { TodosProvider, useTodos };
