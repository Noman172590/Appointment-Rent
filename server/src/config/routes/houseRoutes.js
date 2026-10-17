import express from "express";
import {
  getHouses,
  getHouseById,
  createHouse,
  getMyHouses,
  deleteHouse,
} from "../controllers/houseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getHouses);
router.get("/mine", protect, getMyHouses);
router.post("/", protect, createHouse);
router.get("/:id", getHouseById);
router.delete("/:id", protect, deleteHouse);

export default router;