/**
 * reducerの結合
 */

import todos from './todos';
import visibilityFilter from './visibilityFilter';

/**
 * Reducerをまとめるヘルパー関数
 * @param {Object} reducers reducerの連想配列
 * @returns {Function} 結合後のReducer関数
 * 
 * 参考: https://github.com/reduxjs/redux/blob/master/src/combineReducers.js
 */
const combineReducer = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};

  for (let key of reducerKeys) {
    const reducer = reducers[key];
    if (typeof reducer === 'function') {
      finalReducers[key] = reducer;
    }
  }

  const finalReducerKeys = Object.keys(finalReducers);

  return (state, action) => {
    let newState = {};
    let hasChanged = false;

    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const prevState = state[key];
      const nextState = reducer(prevState, action);

      if (typeof nextState === 'undefined') {
        throw new Error(`「 ${key} 」は存在しないStateです。`)
      }
      newState[key] = nextState;
      hasChanged = hasChanged || (nextState !== prevState);
    }

    return hasChanged ? newState : state;
  };
};

export default combineReducer({
  todos,
  visibilityFilter
});


// combineReducerを利用せずに手作りした場合
const rootReducers = (state = {}, action = {}) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};
