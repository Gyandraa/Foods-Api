type Food = {
  id: number;
  name: string;
  placeoforigin?: string;
  Themainingredient?: string;
  price?: number;
};

export const dataFoods: Food[] = [
  {
    id: 1,
    name: "Yellow Rice",
    placeoforigin: "indonesian",
    Themainingredient: "rice, turmeric and coconut MILK",
    price: 20000,
  },
  {
    id: 2,
    name: "Rice Cake",
    placeoforigin: "indonesian",
    Themainingredient: "rice",
    price: 5000,
  },
];
