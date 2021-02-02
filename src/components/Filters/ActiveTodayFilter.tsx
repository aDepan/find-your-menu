import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Filters.css';

const ActiveTodayFilter: React.FC = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateObj = new Date();
    const weekday = dateObj.toLocaleString('default', { weekday: 'long' });

    setActive(event.target.checked);
    dispatch({
      type: 'ACTIVE_TODAY_FILTER',
      activeToday: event.target.checked ? weekday : '',
    });
  };

  return (
    <div className='Filters-item'>
      <label>
        <input
          name='activeMenus'
          type='checkbox'
          checked={active}
          onChange={inputChangeHandler}
        />
        Today Active
      </label>
    </div>
  );
};

export default ActiveTodayFilter;
