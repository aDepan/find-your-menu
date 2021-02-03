export type MenusArrType = {
  name: string;
  activeDays: string[];
  shopIds: string[];
  categories: CategoriesType[];
};

export type CategoriesType = {
  name: string;
  products: ProductsType[];
};
export type ProductsType = {
  name: string;
  price: number;
};

export type MultiselectType = {
  label: string;
  value: string;
};
