Backend con Node.js y Express

Este proyecto es un backend simple construido con Node.js y Express.
Permite agregar datos y obtener datos a través de dos endpoints principales.

🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalado en tu máquina:

Node.js (v14 o superior recomendado)

npm (normalmente viene con Node.js)

⚙️ Instalación y ejecución

1. Clona el repositorio
   git clone https://github.com/tu-usuario/tu-repo.git
  cd tu-repo
2. Instala las dependencias
  npm install
3.Ejecuta el servidor
  node app.js

El servidor se ejecutará por defecto en:
👉 http://localhost:3000

📡 Endpoints disponibles

1️⃣ Registrar un paciente

POST /api/patients/register

Descripción: Permite agregar un nuevo paciente al sistema.

Body request (JSON):

{

    "name":"Juan", #string, nombre el paciente obligatorio
    
    "age":27,      #number, edad del paciente
    
    "symptoms":"Dolor de Cabeza" #string, descripcion de sintomas del paciente
}

Response (JSON):

{
    
    "status": 201,
    
    "message": "Patient registered successfully"
}

2️⃣ Obtener datos

GET /api/patients/patients

Descripción: Devuelve todos los pacientes almacenados.

Response (JSON)

{

    "status": 200,
    "message": "Patients retrieved successfully",
    "data": [
        {
            "id": 1,
            "name": "Juan",
            "age": 27,
            "symptoms": "Dolor de Cabeza",
            "created_at": "2025-08-17 23:03:10"
        },
    ]
}

📂 Estructura del proyecto

.

├──src

    ├──controllers
      └──Patients.controller.js
    ├──models
      └──Patients.model.js
    ├──routes
      └──Patients.routes.js
    ├── db.js  
├── app.js        # Archivo principal (servidor Express)
├── package.json    # Configuración del proyecto y dependencias
└── README.md       # Documentación
