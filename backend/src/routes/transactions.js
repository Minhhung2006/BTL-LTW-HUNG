import express from "express";
import { TransactionController } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/:user_id", TransactionController.getByUser);
router.post("/", TransactionController.create);

export default router;
