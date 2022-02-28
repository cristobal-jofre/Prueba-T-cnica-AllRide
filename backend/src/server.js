import express from "express";
import cors from "cors";
import morgan from "morgan";
require("dotenv").config();

import indexRoutes from "./routes/movie.routes";

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.use("/api/movie", indexRoutes);

export default app;
