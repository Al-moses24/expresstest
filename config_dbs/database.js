const mysql=require('mysql2/promise');
require('dotenv').config()

const db_connection = mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    port:3306,
    password:process.env.password,
    database:process.env.database,
    connectiomnLimite:5
})
module.exports=db_connection