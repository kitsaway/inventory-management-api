import { Router } from "express";
import {
  create,
  getAll,
  deleteById,
} from "../controllers/inventory.controller";

const router = Router();

router.post("/", create);
router.delete("/:id", deleteById);
router.get("/", getAll);

export default router;
