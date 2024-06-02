CREATE TABLE "foods" (
  "id" integer PRIMARY KEY,
  "name" varchar(100),
  "origin" varchar(100),
  "ingredient" ingredient[],
  "price" float,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "ingredient" (
  "id" integer PRIMARY KEY,
  "foods" food[],
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "foods_ingredient" (
  "foods_id" integer,
  "ingredient_id" integer,
  PRIMARY KEY ("foods_id", "ingredient_id")
);

ALTER TABLE "foods_ingredient" ADD FOREIGN KEY ("foods_id") REFERENCES "foods" ("id");

ALTER TABLE "foods_ingredient" ADD FOREIGN KEY ("ingredient_id") REFERENCES "ingredient" ("id");

