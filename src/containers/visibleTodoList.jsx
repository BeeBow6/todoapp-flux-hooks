/**
 * Todoリストの表示調整
 */
import React, { useContext } from 'react';
import TodoContext from '../context';
import TodoList from '../components/todoList';
import {
  toggleTodo,
  VisibilityFilters
} from '../actions';


const VisibleTodoList = () => {

  // context経由でstoreのデータを受け取る
  const { todos, visibilityFilter, dispatch } = useContext(TodoContext);
  let visibleTodos;

  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      visibleTodos = todos;
      break;
    case VisibilityFilters.SHOW_COMPLETED:
      visibleTodos = todos.filter(t => t.completed);
      break;
    case VisibilityFilters.SHOW_ACTIVE:
      visibleTodos = todos.filter(t => !t.completed);
      break;
    default:
      throw new Error('Unknown filter ' + visibilityFilter);
  }

  return (
    <TodoList
      todos={visibleTodos}
      toggleTodo={(id) => { dispatch(toggleTodo(id)) }}
    />
  );
};

export default VisibleTodoList;
