import { Provider } from 'react-redux';

import Menu from './components/Menu/Menu';
import NameFilter from './components/Filters/NameFilter';
import ShopIDFilter from './components/Filters/ShopIDFilter';
import ActiveTodayFilter from './components/Filters/ActiveTodayFilter';
import { sortMenusArray } from './utils/util';

import { ConfigureStore } from './redux/configureStore';

import { data } from './testdata';
import './App.css';

const store = ConfigureStore();

const App: React.FC = () => {
  const sortedMenus = sortMenusArray(data);
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='App-header'>
          <h1>Find your menu</h1>
        </div>
        <div className='Filters'>
          <NameFilter />
          <ShopIDFilter menus={sortedMenus} />
          <ActiveTodayFilter />
        </div>
        <Menu menus={sortedMenus} />
      </div>
    </Provider>
  );
}

export default App;
