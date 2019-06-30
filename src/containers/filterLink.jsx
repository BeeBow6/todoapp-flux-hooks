/**
 * フィルターの切替
 */
import React from 'react';
import { useFilter } from '../stores';
import Link from '../components/link';
import { setVisibilityFilter } from '../actions';

const FilterLink = ({ filter, children }) => {

  // context経由でstoreのデータを受け取る
  const [visibilityFilter, dispatch] = useFilter();

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
