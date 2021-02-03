import { createStore } from 'redux';

import { Filters } from './FiltersReducer';

export const ConfigureStore = () => {
  const store = createStore(Filters);

  return store;
};
