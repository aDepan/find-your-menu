import React, { useContext } from 'react';

import { FilterContext } from '../../context/menuContext';
import { applyNameFilter } from '../../redux/ActionCreators';

import styled from 'styled-components';

const StyledInputText = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const NameFilter: React.FC = () => {
  const [state, dispatch] = useContext(FilterContext);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(applyNameFilter(event.target.value));
  };
  console.log('nameFilter');
  return (
    <div>
      <StyledInputText
        type='text'
        placeholder='Search by name'
        onChange={inputChangeHandler}
        value={state.nameFilter}
      />
    </div>
  );
};

export default React.memo(NameFilter);
