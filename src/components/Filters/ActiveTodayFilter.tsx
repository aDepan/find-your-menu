import React, { useState, useContext } from 'react';

import styled from 'styled-components';

import { FilterContext } from '../../context/menuContext';

import { checkActiveTodayFilter } from '../../redux/ActionCreators';

const StyledInputCheckbox = styled.input`
  margin-right: 8px;
`;

const ActiveTodayFilter: React.FC = () => {
  const [active, setActive] = useState(false);

  const [state, dispatch] = useContext(FilterContext);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateObj = new Date();
    const weekday = dateObj.toLocaleString('default', { weekday: 'long' });

    setActive(event.target.checked);
    dispatch(checkActiveTodayFilter(event.target.checked ? weekday : ''));
  };

  return (
    <div>
      <label>
        <StyledInputCheckbox
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

export default React.memo(ActiveTodayFilter);
