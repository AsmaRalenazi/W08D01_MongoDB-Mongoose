const express= require("express");
const db=require("./db")
const todoModel =require("./schema")
const app= express();
app.use(express.json());
const port =3000;


app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});



app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});