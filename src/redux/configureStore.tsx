import { createStore } from 'redux';

import { Filters } from './Filters';

export const ConfigureStore = () => {
  const store = createStore(Filters);

  return store;
};
