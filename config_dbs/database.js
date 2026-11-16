const mysql=require('mysql2/promise');

const db_connection = mysql.createPool({
    host:'localhost',
    user:'root',
    port:3306,
    password:'Aliy',
    database:'minimarket',
    connectiomnLimite:5
})
module.exports=db_connection