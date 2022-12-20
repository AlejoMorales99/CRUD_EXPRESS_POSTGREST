const express = require('express');
const router = express.Router();
const clientesModel = require("../model/clientesModule");

router.get("/", (req, res) => {
    
    clientesModel.mostrarClientes().then(clientes => {
        res.json(clientes);
    }).catch(error => {
        console.log(error);
        return res.status(500).send("error obteniendo productos")
    })
    
})

router.post("/insertarCliente", (req, res) => {

    const { nombre, apellido } = req.body;
    
    clientesModel.insertarClientes(nombre, apellido).then(mensaje => {
        
        res.status(200).send("Registro insertado con exito");
    }).catch(error => {
        console.log("error al insertar el registro");
    })
})



module.exports = router


