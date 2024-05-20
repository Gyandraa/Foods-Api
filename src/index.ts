import { Hono } from "hono";

import { dataFoods } from "./data/foods";

let foods = dataFoods;

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello everyone" });
});
app.get("/foods", (c) => {
  return c.json(foods);
});

app.get("/foods/:id", (c) => {
  const id = Number(c.req.param("id"));

  const food = dataFoods.find((food) => food.id === id);

  if (!food) {
    c.status(404);
    return c.json({ message: "not found" });
  }
  return c.json(food);
});

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const nextId = foods[foods.length - 1].id + 1;

  const newFood = {
    id: nextId,
    name: body.name || null,
    origin: body.origin || null,
    themainingredient: body.themainingredient || null,
    price: body.price || null,
  };

  foods = [...foods, newFood];

  return c.json({ food: newFood });
});

app.delete("/foods", (c) => {
  foods = [];

  return c.json({ message: "All foods data have been removed" });
});

app.delete("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  const food = foods.find((food) => food.id === id);

  if (!food) {
    c.status(404);
    return c.json({ message: "Food not found" });
  }

  const updatedFoods = foods.filter((food) => food.id !== id);

  foods = updatedFoods;

  return c.json({
    message: `Deleted food with id ${id}`,
  });
});

app.put("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const food = foods.find((food) => food.id === id);

  if (!food) {
    c.status(404);
    return c.json({ message: "Food not found" });
  }

  const newFood = {
    ...food,
    name: body.name || food.name,
    origin: body.origin || food.origin,
    themainingredient: body.themainingredient || food.themainingredient,
    price: body.price || food.price,
  };
  const updatedFoods = foods.map((food) => {
    if (food.id === id) {
      return newFood;
    } else {
      return food;
    }
  });

  foods = updatedFoods;

  return c.json({
    message: `Updated food with id ${id}`,
    animal: newFood,
  });
});

export default app;
