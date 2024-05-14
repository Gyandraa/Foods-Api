type Food = {
  id: number;
  name: string;
  placeoforigin?: string;
  Themainingredient?: string;
  howmuch?: number;
};

export const dataFoods: Food[] = [
  {
    id: 1,
    name: "Yellow Rice",
    placeoforigin: "indonesian",
    Themainingredient: "rice, turmeric and coconut MILK",
    howmuch: 20,
  },
  {
    id: 2,
    name: "Rice Rolls",
    placeoforigin: "indonesian",
    Themainingredient: "rice",
    howmuch: 15,
  },
];
