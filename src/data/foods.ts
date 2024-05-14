type Food = {
  id: number;
  name: string;
  origin?: string;
  Themainingredient?: string;
  price?: number;
};

export const dataFoods: Food[] = [
  {
    id: 1,
    name: "Yellow Rice",
    origin: "indonesia",
    Themainingredient: "rice, turmeric and coconut MILK",
    price: 20000,
  },
  {
    id: 2,
    name: "Rice Cake",
    origin: "indonesia",
    Themainingredient: "rice",
    price: 5000,
  },
];
