require("dotenv/config");
const { Pool } = require("pg");

try {
  
  const client = new Pool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database,
    port: process.env.portDB,
  });

  module.exports = client


} catch (error) {
  console.log("Error al conectar a la base de datos en " +error );
}


