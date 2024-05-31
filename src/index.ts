import { Hono } from "hono";

import { Food, dataFoods } from "./data/foods.ts";
import { client } from "./lib/db.ts";

await client.connect();

let foodsArray = dataFoods;

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello everyone" });
});
app.get("/foods", async (c) => {
  const res = await client.query("SELECT * FROM foods");
  const foods = res.rows as Food[];
  return c.json(foods);
});

app.get("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const res = await client.query(`SELECT * FROM foods WHERE id = ${id}`);
  const food = res.rows[0] as Food;

  if (!food) {
    c.status(404);
    return c.json({ message: "not found" });
  }
  return c.json(food);
});

app.post("/foods/seed", async (c) => {
  foodsArray = dataFoods;
  return c.json(foodsArray);
});

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const nextId = foodsArray[foodsArray.length - 1].id + 1;

  const newFood = {
    id: nextId,
    name: body.name || null,
    origin: body.origin || null,
    themainingredient: body.themainingredient || null,
    price: body.price || null,
  };

  foodsArray = [...foodsArray, newFood];

  return c.json({ food: newFood });
});

app.delete("/foods", (c) => {
  foodsArray = [];

  return c.json({ message: "All foods data have been removed" });
});

app.delete("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  const food = foodsArray.find((food) => food.id === id);

  if (!food) {
    c.status(404);
    return c.json({ message: "Food not found" });
  }

  const updatedFoods = foodsArray.filter((food) => food.id !== id);

  foodsArray = updatedFoods;

  return c.json({
    message: `Deleted food with id ${id}`,
  });
});

app.put("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const food = foodsArray.find((food) => food.id === id);

  if (!food) {
    c.status(404);
    return c.json({ message: "Food not found" });
  }

  const newFood = {
    ...food,
    name: body.name || food.name,
    origin: body.origin || food.origin,
    ingredient: body.ingredient || food.ingredient,
    price: body.price || food.price,
  };
  const updatedFoods = foodsArray.map((food) => {
    if (food.id === id) {
      return newFood;
    } else {
      return food;
    }
  });

  foodsArray = updatedFoods;

  return c.json({
    message: `Updated food with id ${id}`,
    animal: newFood,
  });
});
console.log("Foods API is running");

export default app;
