import React, { useReducer, createContext } from 'react';

import * as ActionTypes from '../redux/ActionTypes';
import { data } from '../testdata';

import {StateType, FilterActionsType} from '../redux/reduxActionTypes';

const initialState: StateType = {
  nameFilter: '',
  shopIDs: [],
  activeToday: '',
  menusList: [...data]
};

export const FilterContext = createContext<[StateType, React.Dispatch<any>]>([initialState, ()=>{}]);

const FilterReducer = (state: StateType, action: FilterActionsType) => {
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

export const FilterContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  return (
    <FilterContext.Provider value={[state, dispatch]}>
      {children}
    </FilterContext.Provider>
  );
};
