const express = require('express');
const path = require('path');

const app = express();

//Server
/* app.listen(3130,()=> console.log("Servidor en la terminal 3130")); */
app.listen(app.get("port"),() => console.log("Server Start http://localhost:"+app.get("port")))
/* Esto es para que lo tome heruku */


//Public Access
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Web Access
app.use(require("./routes/web"));