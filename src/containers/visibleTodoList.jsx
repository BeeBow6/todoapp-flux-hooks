/**
 * Todoリストの表示調整
 */
import React from 'react';
import {
  useTodos,
  useFilter
} from '../stores';
import {
  VisibilityFilters,
  toggleTodo
} from '../actions';
import TodoList from '../components/todoList';

const VisibleTodoList = () => {

  const [todos, dispatch] = useTodos();
  const [visibilityFilter] = useFilter();

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
      toggleTodo={id => { dispatch(toggleTodo(id)) }}
    />
  );
};

export default VisibleTodoList;
