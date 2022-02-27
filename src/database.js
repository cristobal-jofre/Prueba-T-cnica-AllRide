import mongoose from "mongoose";
import { DB_URI } from "./config/index";

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("database is connected");
});
