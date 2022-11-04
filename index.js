const mongoose = require("mongoose");
const app = require("./app");
//const port = process.env.PORT || 3977;
const port =3000;
const urlMongoDb="mongodb+srv://admin:temporal@cluster0.niaeuzb.mongodb.net/mydb";

mongoose.connect(urlMongoDb,(err, res)=>{
    try {
        if (err){
            throw err;
        } else {
            console.log("la conexion a la base de datos es correcta");
            app.listen(port,()=>{
                //console.log( `Servidor del API REST esta funcionando en http://localhost:${port}`)
                 console.log("Servidor del API REST esta funcionando en http://localhost:3000");
            });
        }
    } catch (error) {
        console.error(error);
    }
});

//para levantar el servidor

//app.listen(port, ()=>{
  //  console.log("Servidor del API REST esta funcionando en http://localhost:3000");
//});