import { Provider } from 'react-redux';

import React from 'react';

import styled from 'styled-components';

import Menu from './components/Menu/Menu';
import NameFilter from './components/Filters/NameFilter';
import ShopIDFilter from './components/Filters/ShopIDFilter';
import ActiveTodayFilter from './components/Filters/ActiveTodayFilter';

import { ConfigureStore } from './redux/configureStore';

import { FilterContextProvider } from './context/menuContext';

const store = ConfigureStore();

const StyledFilters = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

  @media (max-width: 768px) {
    flex-flow: column wrap;
  }

  & > div {
    width: 25%;

    @media (max-width: 768px) {
      width: 70%;
      margin: 5px 0;
    }

    & > input {
      font: 1.2rem Calibri;
      outline: none;

      ::placeholder {
        color: #aaa;
      }
    }
  }
`;

const StyledApp = styled.div`
  font-family: Calibri, Helvetica, sans-serif !important;
  font-size: 1.2rem;
`;

const StyledAppHeader = styled.div`
  background-color: #084625;
  color: white;
  padding: 5px;
  text-align: center;

  & > h1 {
    text-transform: uppercase;
  }
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StyledApp className='App'>
        <StyledAppHeader className='App-header'>
          <h1>Find your menu</h1>
        </StyledAppHeader>
        <FilterContextProvider>
          <StyledFilters>
            <NameFilter />
            <ShopIDFilter />
            <ActiveTodayFilter />
          </StyledFilters>
          <Menu />
        </FilterContextProvider>
      </StyledApp>
    </Provider>
  );
};

export default React.memo(App);
