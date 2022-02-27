import { config } from "dotenv";

config();

export const { PORT, NODE_ENV, MONGO_HOST, DB_NAME } = process.env;

export const DB_URI = `mongodb://${MONGO_HOST}/${DB_NAME}`;
