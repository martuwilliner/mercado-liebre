const express = require('express');
const app = express();

const path = require('path');

//Server
app.listen(3130,()=> console.log("Servidor en la terminal 3130"));


//Public Access
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Web Access
app.use(require("./routes/web"));