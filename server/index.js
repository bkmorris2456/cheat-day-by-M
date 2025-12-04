import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import pkg from "pg";

// Imported Routes
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";
import inventoryRouter from "./routes/inventory.js";
import reviewsRouter from "./routes/reviews.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/users", usersRouter);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Bakery backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
