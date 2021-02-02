import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNameFilter } from '../../redux/Selectors';

import './Filters.css';

const NameFilter: React.FC = () => {
  let nameInput = useSelector(getNameFilter);
  const dispatch = useDispatch();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
    dispatch({ type: 'NAME_FILTER', nameFilter: event.target.value });
  };

  return (
    <div className='Filters-item'>
      <input
        type='text'
        placeholder='Search by name'
        onChange={inputChangeHandler}
        value={nameInput}
      />
    </div>
  );
};

export default NameFilter;
