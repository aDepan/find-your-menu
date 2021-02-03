import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useDispatch } from 'react-redux';

import { MenusArrType, MultiselectType } from '../../types';

import {selectShopIDFilter} from '../../redux/ActionCreators';

import './Filters.css';

const buildMultiselectOptionsList = (rawData: MenusArrType[]) => {
  const shopIDsArray: Array<string> =  rawData.reduce((acc: string[], currval) => {
    return [...acc, ...currval.shopIds];
  }, []);


  const shopIDsUniqueList:string[] = [...new Set(shopIDsArray)];

  const multiselectArrayOfObj: MultiselectType[] = [];
  shopIDsUniqueList.forEach(el  =>
    multiselectArrayOfObj.push({
      label: el,
      value: el,
    })
  );
  return multiselectArrayOfObj;
};

type ShopIDFilterProps = {
  menus: MenusArrType[];
};

const ShopIDFilter: React.FC<ShopIDFilterProps> = ({menus}) => {
  const [selected, setSelected] = useState<MultiselectType[]>([]);
  const dispatch = useDispatch();

  const multiselectArrayOfObj = buildMultiselectOptionsList(menus);

  useEffect(() => {
    const selectedArray = selected.map(el => {
      return el.label;
    });
    dispatch(selectShopIDFilter(selectedArray)  );
  }, [selected, dispatch]);

  return (
    <div className='Filters-item'>
      <MultiSelect
        options={multiselectArrayOfObj}
        value={selected}
        onChange={setSelected}
        labelledBy='Select categorie'
      />
    </div>
  );
};

export default ShopIDFilter;
