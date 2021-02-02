import {menusArrType} from '../types';


export const sortMenusArray = (menusArray: menusArrType[]) => {
  return menusArray.sort((menuPrev, menuNext) => {
    var nameMenuPrev = menuPrev.name.toUpperCase();
    var nameMenuNext = menuNext.name.toUpperCase();
    if (nameMenuPrev < nameMenuNext) {
      return -1;
    }
    if (nameMenuPrev > nameMenuNext) {
      return 1;
    }
    return 0;
  });
};

export const compareArrays = (munesArray: menusArrType[], shopIDsArray:string[]) => {
  let filteredNameArray:string[] = [];
  munesArray.map(menu => {
    let isOK = 0;
    shopIDsArray.forEach(el => {
      isOK = menu.shopIds.includes(el) ? isOK + 1 : 0;
    });
    if (shopIDsArray.length === isOK) {
      filteredNameArray.push(menu.name);
    }
    return filteredNameArray;
  });
  return filteredNameArray;
};
