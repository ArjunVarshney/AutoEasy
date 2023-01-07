import Location from "../Model/LocationModel.js";
import User from "../Model/UserModel.js";
import Driver from "../Model/DriverModel.js";

// for getting all the active users in the datebase
export const getLocations = async (req, res) => {};

// for adding a active user on request
export const addLocation = async (req, res) => {};

// for getting all the drivers that are active
export const getDrivers = async (req, res) => {};

// for getting all the passengers that are active
export const getPassengers = async (req, res) => {};

// To return the user withing 5 kms of range
export const getWithinField = async (req, res) => {};

// for updating the datasebase every 5 min, to remove all the inactive users
export const UpdateActive = async () => {};
