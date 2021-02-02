import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useDispatch } from 'react-redux';

import { menusArrType, multiselectType } from '../../types';

import './Filters.css';

const buildMultiselectOptionsList = (rawData: menusArrType[]) => {
  const shopIDsArray: Array<string> =  rawData.reduce((acc: string[], currval) => {
    return [...acc, ...currval.shopIds];
  }, []);


  const shopIDsUniqueList:string[] = [...new Set(shopIDsArray)];

  const multiselectArrayOfObj: multiselectType[] = [];
  shopIDsUniqueList.forEach(el  =>
    multiselectArrayOfObj.push({
      label: el,
      value: el,
    })
  );
  return multiselectArrayOfObj;
};

type ShopIDFilterProps = {
  menus: menusArrType[];
};

const ShopIDFilter: React.FC<ShopIDFilterProps> = ({menus}) => {
  const [selected, setSelected] = useState<multiselectType[]>([]);
  const dispatch = useDispatch();

  const multiselectArrayOfObj = buildMultiselectOptionsList(menus);

  useEffect(() => {
    const selectedArray = selected.map(el => {
      return el.label;
    });
    dispatch({ type: 'SHOPID_FILTER', shopIDs: selectedArray });
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
