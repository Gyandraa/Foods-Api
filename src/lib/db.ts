import "dotenv/config"; // If needed
import pg from "pg";

const { Client } = pg;

export const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),

  // Alternatively using Database URL connection string
  // connectionString: process.env.DATABASE_URL,
});
