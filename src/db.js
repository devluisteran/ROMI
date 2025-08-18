import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Configuración correcta usando el wrapper 'sqlite'
export const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
});

// Verificar conexión y crear tablas
async function initializeDatabase() {
    try {
        await db.exec(`CREATE TABLE IF NOT EXISTS patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            symptoms TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
        console.log('Conexión exitosa y tabla patients verificada');
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
        throw error;
    }
}

// Inicializar la base de datos
await initializeDatabase();

export default db;