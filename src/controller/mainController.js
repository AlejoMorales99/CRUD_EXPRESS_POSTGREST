require("dotenv/config");
const express = require("express");
const app = express();
const clientes = require("../routes/clientesRouter");


app.use(express.json());
app.use(clientes);


const puerto = process.env.port || 3001;

app.listen(puerto, () => {
    console.log(`Listo por el puerto ${puerto}`);
});