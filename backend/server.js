import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./src/routes/userRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import budgetRoutes from "./src/routes/budgetRoutes.js";
import transactionRoutes from "./src/routes/transactionRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on ${process.env.PORT}`)
);
