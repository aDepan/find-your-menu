import React, { useEffect, useState, useContext } from 'react';
import MultiSelect from 'react-multi-select-component';
//import { useDispatch } from 'react-redux';

import { FilterContext } from '../../context/menuContext';

import { MenusArrType, MultiselectType } from '../../types';

import { selectShopIDFilter } from '../../redux/ActionCreators';

const buildMultiselectOptionsList = (rawData: MenusArrType[]) => {
  const shopIDsArray: Array<string> = rawData.reduce(
    (acc: string[], currval) => {
      return [...acc, ...currval.shopIds];
    },
    []
  );

  const shopIDsUniqueList: string[] = [...new Set(shopIDsArray)];

  const multiselectArrayOfObj: MultiselectType[] = [];
  shopIDsUniqueList.forEach(el =>
    multiselectArrayOfObj.push({
      label: el,
      value: el,
    })
  );
  return multiselectArrayOfObj;
};

const ShopIDFilter: React.FC = () => {
  const [selected, setSelected] = useState<MultiselectType[]>([]);

  const [state, dispatch] = useContext(FilterContext);

  const multiselectArrayOfObj = buildMultiselectOptionsList(state.menusList);
  useEffect(() => {
    if (selected.length !== state.shopIDs.length) {
      const selectedArray = selected.map(el => {
        return el.label;
      });
      dispatch(selectShopIDFilter(selectedArray));
    }
  }, [selected, dispatch, state.shopIDs]);

  console.log('ShopIDFilter');

  return (
    <div>
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
