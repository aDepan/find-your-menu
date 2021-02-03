import {StateType} from './reduxActionTypes';

export const getNameFilter = (state: StateType) => state.nameFilter;

export const getShopIDFilter = (state: StateType) => state.shopIDs;

export const getActiveToday = (state: StateType) => state.activeToday;
