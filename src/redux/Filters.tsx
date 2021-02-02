import {stateType, filterActionsType} from '../types';

const initialState = {
  nameFilter: '',
  shopIDs: [],
  activeToday: '',
};


export const Filters = (state: stateType = initialState, action: filterActionsType) => {
  switch (action.type) {
    case 'NAME_FILTER': {
      return {
        ...state,
        nameFilter: action.nameFilter,
      };
    }
    case 'SHOPID_FILTER': {
      return {
        ...state,
        shopIDs: action.shopIDs,
      };
    }
    case 'ACTIVE_TODAY_FILTER': {
      return {
        ...state,
        activeToday: action.activeToday,
      };
    }
    default:
      return state;
  }
};
