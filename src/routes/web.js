const express = require ("express");
const app = express.Router();
const path = require ("path");

//Website Routes
app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views/index.html")));

//Routes Register
app.get("/register",(req,res) => res.sendFile(path.resolve(__dirname,"../views/register.html")));

// Routes Login
app.get("/login",(req,res) => res.sendFile(path.resolve(__dirname,"../views/login.html")));


module.exports = app;


