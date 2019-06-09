
// フィルターの定数
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// アクションの定数
export const TodoActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

// TodoID
let nextTodoId = 0;

/**
 * Todo項目の追加
 * @param {String} text Todoテキスト
 * @returns {Object} Todo追加用action
 */
export const addTodo = (text) => ({
  type: TodoActionTypes.ADD_TODO,
  id: nextTodoId++,
  text
});

/**
 * 表示の切替
 * @param {Number} id Todo項目のId
 * @returns {Object} Todo切替用action
 */
export const toggleTodo = (id) => ({
  type: TodoActionTypes.TOGGLE_TODO,
  id
});

/**
 * 表示フィルター切替
 * @param {TodoActionTypes} filter 指定するフィルター定数
 * @returns {Object} フィルター切替用action
 */
export const setVisibilityFilter = (filter) => ({
  type: TodoActionTypes.SET_VISIBILITY_FILTER,
  filter
});

