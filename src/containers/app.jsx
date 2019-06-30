/**
 * StoreとViewの接続
 */

import React from 'react';
import {
  TodosProvider,
  FilterProvider
} from '../stores';
import AddTodo from './addTodo';
import VisibleTodoList from './visibleTodoList';
import Footer from '../components/footer';


const App = () => {

  return (
    <FilterProvider>
      <TodosProvider>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </TodosProvider>
    </FilterProvider>
  );
};

export default App;
