import React from 'react';
import { useSelector } from 'react-redux';

import Categories from './MenuDetails/Categories';
import { compareArrays } from '../../utils/util';
import {
  getNameFilter,
  getShopIDFilter,
  getActiveToday,
} from '../../redux/Selectors';
import {menusArrType} from '../../types';

import './Menu.css';

type MenuProps = {
  menus: menusArrType[];
};

const Menu: React.FC<MenuProps> = ({ menus }) => {
  const nameFilter = useSelector(getNameFilter);
  const shopIDsSeleted = useSelector(getShopIDFilter);
  const activeToday = useSelector(getActiveToday);

  if (nameFilter.length > 0) {
    menus = menus.filter(menu => {
      return menu.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
  }

  if (shopIDsSeleted.length > 0) {
    const menuNamesFiltered = compareArrays(menus, shopIDsSeleted);
    menus = menus.filter(menu => {
      return menuNamesFiltered.includes(menu.name);
    });
  }

  if (activeToday) {
    menus = menus.filter(menu => {
      return menu.activeDays.includes(activeToday.toUpperCase());
    });
  }

  const menusList = menus.map(menu => {
    return (
      <div key={menu.name} className='Menu-item'>
        <h2>{menu.name}</h2>
        <Categories categories={menu.categories} />
      </div>
    );
  });

  return <div className='Menu-list'>{menusList}</div>;
};

export default Menu;
