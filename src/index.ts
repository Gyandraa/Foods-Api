import { Hono } from "hono";
import { dataFoods } from "./data/foods.ts";
import { prisma } from "./lib/db.ts";

const app = new Hono();

app.post("/foods/seed", async (c) => {
    const foods = await prisma.food.createMany({ data: dataFoods });
    return c.json(foods);
});


app.get("/", (c) => {
  return c.json({ message: "Hello everyone" });
});
app.get("/foods", async (c) => {
  const foods = await prisma.food.findMany();
  return c.json(foods);
});

app.get("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const food = await prisma.food.findUnique({
    where: { id },
  });

  if (!food) {
    c.status(404);
    return c.json({ message: "not found" });
  }
  return c.json(food);
});

//app.post("/foods/seed", async (c) => {
//foodsArray = dataFoods;
//return c.json(foodsArray);
//});

app.post("/foods", async (c) => {
  const body = await c.req.json();

  const foodData = {
    name: String(body.name),
    origin: String(body.origin),
    ingredient:String(body.ingredient),
    price:Number(body.price),
  };

  const food = await prisma.food.create({
    data: foodData,
  });

  return c.json({ food });
});

app.delete("/foods", async (c) => {
  const result = await prisma.food.deleteMany();

  return c.json({
     message: "All foods data have been removed",
     result,
     });
});

app.delete("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const deletedFood = await prisma.food.delete({
    where: { id },
  });

  return c.json({
    message: `Deleted food with id ${id}`,
    deletedFood
  });
});

app.put("/foods/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const foodData = {
    name: String(body.name),
    origin: String(body.origin),
    ingredient:String(body.ingredient),
    price:Number(body.price),
  };

  const updatedFood = await prisma.food.update({
    where: {id},
    data: foodData,
  });

  return c.json({
    message: `Updated food with id ${id}`,
  });
});
console.log("Foods API is running");

export default app;
