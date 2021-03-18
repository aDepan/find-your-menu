import {MenusArrType} from '../types';
import * as ActionTypes from './ActionTypes';

export type StateType = {
    nameFilter: string;
    shopIDs: string[];
    activeToday: string;
    menusList: MenusArrType[];
  };
  
  interface NamefilterAction {
    type: typeof ActionTypes.NAME_FILTER;
    nameFilter: string;
  }
  
  interface ShopIdAction {
    type: typeof ActionTypes.SHOPID_FILTER;
    shopIDs: string[];
  }
  
  interface ActiveTodayAction {
    type: typeof ActionTypes.ACTIVE_TODAY_FILTER;
    activeToday: string;
  }
  
  export type FilterActionsType =
    | NamefilterAction
    | ShopIdAction
    | ActiveTodayAction;
  