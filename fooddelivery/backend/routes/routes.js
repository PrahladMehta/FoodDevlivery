const express = require("express");

const route = express.Router();

const { createStaff } = require("../Controller/createStaff");
const { deleteStaff } = require("../Controller/deleteStaff");
const { getStaff } = require("../Controller/getStaff");
const {updateStaff}=require("../Controller/updateStaff");
const { createCustomer } = require("../Controller/createCustomer");
const {getCustomer}=require("../Controller/getCustomer");
const { deleteAvilability } = require("../Controller/deleteAvilability");
const { createAvailable } = require("../Controller/createAvilability");
const { getAvilability } = require("../Controller/getAvailable");
const {updateAvailable}=require("../Controller/updateAvilability");

route.post("/addstaff", createStaff);
route.post("/createcustomer", createCustomer);
route.post("/createavailable", createAvailable);
route.delete("/deleteavailable/:staffNo", deleteAvilability);
route.delete("/deletestaff/:staffNo", deleteStaff);
route.get("/getstaff", getStaff);
route.get("/getavailable", getAvilability);
route.get("/getcustomer",getCustomer);
route.post("/updatestaff",updateStaff);
route.post("/updateavilable",updateAvailable);

module.exports = route;
