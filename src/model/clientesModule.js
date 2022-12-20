const con = require("../database/conexion")

module.exports = {
    async mostrarClientes(){
        let result = await con.query("select * from clientes")
        return result.rows
    },

    async insertarClientes(nombre,apellido) {
        let result = await con.query(`insert into clientes ("Nombre","Apellido") VALUES ($1,$2)`, [nombre,apellido])
        return result
    }

}