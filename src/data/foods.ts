export type Food = {
  id: number;
  name: string;
  origin?: string;
  ingredient?: string[];
  price?: string;
};

export const dataFoods: Food[] = [
  {
    id: 1,
    name: "Yellow Rice",
    origin: "indonesia",
    ingredient: ["rice", "turmeric", "coconut MILK"],
    price: "20000",
  },
  {
    id: 2,
    name: "Rice Cake",
    origin: "indonesia",
    ingredient: ["rice"],
    price: "5000",
  },
];
