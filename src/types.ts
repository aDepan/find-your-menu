import * as ActionTypes from './redux/ActionTypes';

export type menusArrType = {
  name: string;
  activeDays: string[];
  shopIds: string[];
  categories: Array<{
    name: string;
    products: Array<{ name: string; price: number }>;
  }>;
};

export type multiselectType = {
  label: string;
  value: string;
};

//Redux action types

export type stateType = {
  nameFilter: string;
  shopIDs: string[];
  activeToday: string;
};

interface NamefilterAction {
  type: typeof ActionTypes.NAME_FILTER;
  nameFilter: string;
}

interface ShopIdAction {
  type: typeof ActionTypes.SHOPID_FILTER;
  shopIDs: string[];
}

interface activeTodayAction {
  type: typeof ActionTypes.ACTIVE_TODAY_FILTER;
  activeToday: string;
}

export type filterActionsType =
  | NamefilterAction
  | ShopIdAction
  | activeTodayAction;
