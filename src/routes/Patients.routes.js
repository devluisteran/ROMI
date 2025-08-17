import { Router } from 'express';
//import registerPatient from "../controllers/Patients.controller";

import {getPatients,registerPatient} from "../controllers/Patients.controller.js";
const routerPatients = Router();

routerPatients.get("/patients", getPatients);
routerPatients.post('/register', registerPatient);

export default routerPatients;