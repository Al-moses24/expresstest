const express=require("express");
const db_connection=require("../../config_dbs/database");
const netli=require("serverless-http");
const ServerlessHttp = require("serverless-http");

const app =express();
app.use(express.json());
const PORT=3000;

//test express
app.get('/aliy',(req, res) =>{
    return res.send("Hellow word!");
});
//view fruits
app.get('/View_fruits',
    async(req,res)=>{
        const [values]= await db_connection.execute('SELECT * FROM fruits')
        res.json ({'taarifa':values})
    
    }
)
//add fuits
app.post('/AddFruits',
    async(req,res)=>{
    const {Fruits_name,Quantity,Price}=req.body
    await db_connection.execute('INSERT INTO fruits(FruitsName,Quantity,Price) VALUES(?,?,?)',
        [Fruits_name,Quantity,Price])
        res.json({'ujumbe':'your fruits is added'})
        console.log(Fruits_Name,Quantity,Price)
})
//delete
app.delete('/Delete/:wekaId',
    async (req,res)=>{
    const del=req.params.wekaId
    await db_connection.execute('delete from fruits where Id=?',
        [del]
    )
    res.json({"ujumbe":"you delet fruits"})
})

//update
app.put('/update/:ekaId',
    async (req,res)=>{
        const {Drinks_name,Quantity,Price}=req.body
        const changes=req.params.ekaId
        await db_connection.execute('update drinks set DrinksName=?,Quantity=?,Price=? WHERE id=?',
            [Drinks_name,Quantity,Price,changes]
        )
        res.json({"massage":"alread update"})
    }
)
//test database connection test on terminal
async function test(){
    await db_connection.getConnection();
    console.log("database is ready!");
}
test()

// app.listen(PORT,() =>{
//     console.log('server is running at http://localhost:3000');
// });
const handler=netli(app)
module.exports.handler