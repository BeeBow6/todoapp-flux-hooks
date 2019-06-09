/**
 * フィルターの切替
 */
import React, { useContext } from 'react';
import TodoContext from '../context';
import Link from '../components/link';
import { setVisibilityFilter } from '../actions';

const FilterLink = ({ filter, children }) => {

  // context経由でstoreのデータを受け取る
  const { visibilityFilter, dispatch } = useContext(TodoContext);

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => {
        dispatch(setVisibilityFilter(filter));
      }}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
