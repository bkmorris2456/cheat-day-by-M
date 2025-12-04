import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const router = express.Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM orders ORDER BY order_id");
  res.json(result.rows);
});

export default router;
