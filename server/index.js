import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/router.js";
import makeConnection from "./database/db.js";
import { UpdateActive } from "./controllers/LocationController.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", true);

app.use(cors());
app.use(bodyParser.json({ extended: "true" }));
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use("/", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listening at port", PORT);
});

makeConnection(
  process.env.MONGO_USERNAME,
  process.env.MONGO_PASSWORD,
  process.env.MONGO_URI,
  process.env.MONGO_PORT
);

setInterval(() => {
  UpdateActive();
}, 1000 * 30);
