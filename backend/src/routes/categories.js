import express from "express";
import { CategoryController } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/:user_id", CategoryController.getByUser);
router.post("/", CategoryController.create);

export default router;
