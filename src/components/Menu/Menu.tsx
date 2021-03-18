import React, { useContext } from 'react';

import Categories from './MenuDetails/Categories';
import { FilterContext } from '../../context/menuContext';

import { filterMenuHandler } from '../../utils/util';

import styled from 'styled-components';

const StyledMenuList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 10px;
`;

const StyledMenuItem = styled.div`
  width: 200px;

  & > h2 {
    background-color: #eceee0;
    padding: 0px 3px;
    text-transform: uppercase;
  }
`;

const Menu: React.FC = () => {
  const [state] = useContext(FilterContext);

  const updatedMenus = filterMenuHandler(
    state.menusList,
    state.nameFilter,
    state.shopIDs,
    state.activeToday
  );

  const menusList = updatedMenus.map(menu => {
    return (
      <StyledMenuItem key={menu.name}>
        <h2>{menu.name}</h2>
        <Categories categories={menu.categories} />
      </StyledMenuItem>
    );
  });

  console.log('rerender Menu');

  return <StyledMenuList className='Menu-list'>{menusList}</StyledMenuList>;
};

export default Menu;
