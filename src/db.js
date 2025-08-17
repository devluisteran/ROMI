const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos (se crea automáticamente si no existe)
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos', err);
  } else {
    console.log('Conectado a la base de datos SQLite');
    // Crear tablas si no existen
    db.run(`CREATE TABLE IF NOT EXISTS patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER,
      symptoms TEXT,
      creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

module.exports = db;