//Creacion de proyecto
const http = require('node:http');
const app = require('./src/app');
const { error } = require('node:console');

//.env
require('dotenv').config();

//config DB
require('./src/config/db')

//server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () =>{
    console.log(`Servidor Escuchando el puerto ${PORT}`);
})

server.on('error', () =>{
    console.log(error);
})