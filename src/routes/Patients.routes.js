const express = require('express');
//import registerPatient from "../controllers/Patients.controller";
const patientsController = require("../controllers/Patients.controller");
const app = express();

const routerPatients = express.Router();
routerPatients.get("/patients", patientsController.getPatients);
routerPatients.post('/register', patientsController.registerPatient);

module.exports = routerPatients;