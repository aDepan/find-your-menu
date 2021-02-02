import {stateType} from '../types';

export const getNameFilter = (state: stateType) => state.nameFilter;

export const getShopIDFilter = (state: stateType) => state.shopIDs;

export const getActiveToday = (state: stateType) => state.activeToday;
