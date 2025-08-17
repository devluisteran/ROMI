import {registerPatientModel,getPatientsModel} from "../models/Patients.model.js";

export const registerPatient = async(req, res)=>{

    try {
        const patient = await registerPatientModel(req.body);

        if (!patient) {
            return res.status(400).json({
                status: 400,
                message: "Failed to register patient"
            });
        }

        return res.status(201).json({
            status: 201,
            message: "Patient registered successfully",
           // data: patient
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to register patient"
        });
    }

   
}

    

export const getPatients = async(req, res)=>{

    try {
        const patients = await getPatientsModel();

        if (!patients) {
            return res.status(404).json({
                status: 404,
                message: "No patients found"
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Patients retrieved successfully",
            data: patients
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to retrieve patients"
        });
    }
}