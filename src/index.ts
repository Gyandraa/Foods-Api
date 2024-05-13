import { Hono } from 'hono'

import { dataFoods } from './data/foods';

let foods = dataFoods;

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: "Hello everyone" });
})
app.get("/foods", (c) => {
  return c.json(foods);
});

app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"))

  const food = dataFoods.find((food) => food.id === id)

  if (!food) {
    c.status(404)
    return c.json({ message : "not found"})
  }
  return c.json(food)
})

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const nextId = foods[foods.length - 1].id + 1;

  const newFood = {
    id: nextId,
    ...body
  };

  foods = [...foods, newFood];

  return c.json({ food: newFood });
});

export default app
