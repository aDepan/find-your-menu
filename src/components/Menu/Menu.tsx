import React from 'react';
import { useSelector } from 'react-redux';

import Categories from './MenuDetails/Categories';

import {
  getNameFilter,
  getShopIDFilter,
  getActiveToday,
} from '../../redux/Selectors';
import {MenusArrType} from '../../types';

import './Menu.css';

type MenuProps = {
  menus: MenusArrType[];
};

const Menu: React.FC<MenuProps> = ({ menus }) => {
  const nameFilter:string = useSelector(getNameFilter);
  const shopIDsSeleted: string[] = useSelector(getShopIDFilter);
  const activeToday:string = useSelector(getActiveToday);

  let updatedMenus = [...menus];

  if (nameFilter.length > 0) {
    updatedMenus = updatedMenus.filter(menu => {
      return menu.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
  }

  if (shopIDsSeleted.length > 0) {
    updatedMenus = updatedMenus.filter(({ shopIds }) => shopIDsSeleted.every((id) => shopIds.includes(id)));
      };

  if (activeToday) {
    updatedMenus = updatedMenus.filter(menu => {
      return menu.activeDays.includes(activeToday.toUpperCase());
    });
  }

  const menusList = updatedMenus.map(menu => {
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
