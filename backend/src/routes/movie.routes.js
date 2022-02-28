import { Router } from "express";

import {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

const router = Router();

// GET
router.get("/", getMovies);
router.get("/:id", getMovie);

// POST
router.post("/", createMovie);

// PUT
router.put("/:id", updateMovie);

// DELETE
router.delete("/:id", deleteMovie);

export default router;
