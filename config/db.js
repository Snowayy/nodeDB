const mysql = require('mysql2')

const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'crud_mvc'

})

connection.connect((err) => {

    if (err) {

        console.error("erro ao conectar no banco de dados")

    } else{

        console.log("Conectado ao banco de dados MySQL")

    }

})

module.exports = connection;