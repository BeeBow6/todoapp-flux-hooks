/**
 * Todo追加
 */
import React, { useState } from 'react';
import { useTodos } from '../stores';
import { addTodo } from '../actions';

const AddTodo = () => {

  const [inputText, setInputText] = useState('');
  const [, dispatch] = useTodos();

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
