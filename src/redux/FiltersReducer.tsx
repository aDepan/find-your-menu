import {StateType, FilterActionsType} from './reduxActionTypes';
import * as ActionTypes from './ActionTypes';

const initialState = {
  nameFilter: '',
  shopIDs: [],
  activeToday: '',
};


export const Filters = (state: StateType = initialState, action: FilterActionsType) => {
  switch (action.type) {
    case ActionTypes.NAME_FILTER: {
      return {
        ...state,
        nameFilter: action.nameFilter,
      };
    }
    case ActionTypes.SHOPID_FILTER: {
      return {
        ...state,
        shopIDs: action.shopIDs,
      };
    }
    case ActionTypes.ACTIVE_TODAY_FILTER: {
      return {
        ...state,
        activeToday: action.activeToday,
      };
    }
    default:
      return state;
  }
};
