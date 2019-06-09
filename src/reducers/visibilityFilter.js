/**
 * TODOリストのフィルターを管理するReducer
 */

import { TodoActionTypes } from '../actions';

const VisibilityFilter = (state, action) => {
  switch (action.type) {
    case TodoActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default VisibilityFilter;
