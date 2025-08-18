import db from "../db.js";

export const registerPatientModel = async (patientData) => {
    const { name, age, symptoms } = patientData;

    if (!name || !age || !symptoms) {
        throw new Error("All fields are required");
    }

    if (typeof age !== 'number' || age <= 0) {
        throw new Error("Age must be a positive number");
    }

    const result = await db.run(
        'INSERT INTO patients (name, age, symptoms) VALUES (?, ?, ?)',
        [name, age, symptoms]
    );

    if (result.changes === 0) {
        throw new Error("Failed to create patient");
    }

    return { id: result.lastID, ...patientData };
};

export const getPatientsModel = async () => {
     try {
        const patients = await db.all('SELECT * FROM patients');
        return patients;
    } catch (error) {
        console.error('Error in getPatientsModel:', error);
        throw error; // Propaga el error para manejarlo en el controlador
    }
};
