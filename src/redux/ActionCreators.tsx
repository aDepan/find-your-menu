import * as ActionTypes from './ActionTypes';

export const applyNameFilter = (nameFilter: string) => ({
  type: ActionTypes.NAME_FILTER,
  payload: {
    nameFilter: nameFilter,
  },
});

export const selectShopIDFilter = (shopIDs: string[]) => ({
  type: ActionTypes.SHOPID_FILTER,
  payload: {
    shopIDs: shopIDs,
  },
});

export const checkActiveTodayFilter = (activeToday: string) => ({
  type: ActionTypes.ACTIVE_TODAY_FILTER,
  payload: {
    activeToday: activeToday,
  },
});
