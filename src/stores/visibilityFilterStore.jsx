import React, { useReducer, useContext } from 'react';
import {
  TodoActionTypes,
  VisibilityFilters
} from '../actions';

const Context = React.createContext();

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case TodoActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const contextValue = useReducer(reducer, VisibilityFilters.SHOW_ALL);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

const useFilter = () => {
  const contextValue = useContext(Context);
  return contextValue;
};

export { FilterProvider, useFilter };
