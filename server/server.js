import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { sequelize } from "./config/database.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

async function start() {

  await sequelize.sync();

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });

}

start();