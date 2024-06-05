import { Food } from "@prisma/client";

export type DataFood = Omit<Food, "createdAt" | "updatedAt">;


export const dataFoods: DataFood[] = [
  {
    id: 1,
    name: "Yellow Rice",
    origin: "indonesia",
    ingredient: "rice, turmeric, coconut MILK",
    price: 10000,
  },
  {
    id: 2,
    name: "Rice Cake",
    origin: "indonesia",
    ingredient:"rice",
    price: 5000,
  },
];
