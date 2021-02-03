import {MenusArrType} from '../types';


export const sortMenusArray = (menusArray: MenusArrType[]) => {
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

