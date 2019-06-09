/**
 * StoreとViewの接続
 */

import React, { useReducer } from 'react';
import TodoContext from '../context';
import TodoReducer from '../reducers';
import TodoApp from '../components/';
import { VisibilityFilters } from '../actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const App = () => {

  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const value = { ...state, dispatch };

  return (
    <TodoContext.Provider value={value}>
      <TodoApp />
    </TodoContext.Provider>
  );
};

export default App;
