CREATE TABLE "foods" (
  "id" integer PRIMARY KEY,
  "name" varchar(100),
  "origin" varchar(100),
  "themainingredient" varchar(100),
  "price" float,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "description" (
  "id" integer PRIMARY KEY,
  "food_id" int,
  "name" varchar(50),
  "location" varchar(50),
  "created_at" datetime,
  "updated_at" datetime
);

ALTER TABLE "description" ADD FOREIGN KEY ("food_id") REFERENCES "foods" ("id");
