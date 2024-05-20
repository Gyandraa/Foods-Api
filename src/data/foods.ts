export type Food = {
  id: number;
  name: string;
  origin?: string;
  themainingredient?: string[];
  price?: string;
};

export const dataFoods: Food[] = [
  {
    id: 1,
    name: "Yellow Rice",
    origin: "indonesia",
    themainingredient: ["rice", "turmeric", "coconut MILK"],
    price: "20000",
  },
  {
    id: 2,
    name: "Rice Cake",
    origin: "indonesia",
    themainingredient: ["rice"],
    price: "5000",
  },
];
