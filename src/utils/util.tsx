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


export const filterMenuHandler = (menusList: MenusArrType[], name: string, shopId: string[], activeToday:string) =>{
  if (name.length > 0) {
    menusList = menusList.filter(menu => {
      return menu.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  if (shopId.length > 0) {
    menusList = menusList.filter(({ shopIds }) => shopId.every((id) => shopIds.includes(id)));
      };

  if (activeToday) {
    menusList = menusList.filter(menu => {
      return menu.activeDays.includes(activeToday.toUpperCase());
    });
  }
  sortMenusArray(menusList);

return menusList;
} 
