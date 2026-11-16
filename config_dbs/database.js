const mysql=require('mysql2/promise');

const db_connection = mysql.createPool({
    host:'sql5.freesqldatabase.com',
    user:'sql5840229',
    port:3306,
    password:'q3VE2uxIX5',
    database:'sql5840229',
    connectiomnLimite:5
})
module.exports=db_connection