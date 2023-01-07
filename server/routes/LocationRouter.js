import express from "express";
import {
  getLocations,
  addLocation,
  getPassengers,
  getDrivers,
  getWithinField,
  deleteUser,
} from "../controllers/LocationController.js";

const locationRouter = express.Router();

locationRouter.get("/getall", getLocations);

locationRouter.get("/passenger", getPassengers);

locationRouter.get("/driver", getDrivers);

locationRouter.post("/addlocation", addLocation);

locationRouter.get("/getinrange", getWithinField);

locationRouter.post("/delete", deleteUser);

export default locationRouter;
