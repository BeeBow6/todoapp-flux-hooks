/**
 * Todo追加
 */
import React, { useState, useContext } from 'react';
import TodoContext from '../context';
import { addTodo } from '../actions';

const AddTodo = () => {

  const [inputText, setInputText] = useState('');
  const { dispatch } = useContext(TodoContext);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputText.trim()) {
            return;
          }
          dispatch(addTodo(inputText));
          setInputText('');
        }}
      >
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
