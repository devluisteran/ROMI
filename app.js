const express = require('express')
const routerPatients = require("./src/routes/Patients.routes");

const app = express()
const port = 3000
app.use(express.json());
app.use("/api/patients",routerPatients);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
