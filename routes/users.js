import express from "express";
import {
  getUser,
  createUser,
  getUserId,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

// All routes in here are starting with /users
// GET All
router.get("/", getUser);

// POST
router.post("/", createUser);

// GET by ID
router.get("/:id", getUserId);

// DELETE
router.delete("/:id", deleteUser);

// PATCH
router.patch("/:id", updateUser);

export default router;
