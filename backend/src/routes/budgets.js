import express from "express";
import { BudgetController } from "../controllers/budgetController.js";

const router = express.Router();

router.get("/:user_id", BudgetController.getByUser);
router.post("/", BudgetController.create);

export default router;
