const express= require("express");
const db=require("./db")
const todoModel =require("./schema")
const app= express();
app.use(express.json());
const port =3000;


// practice
//Q2
app.get("/todos", (req, res) => {
    todoModel
      .find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  // Q1
  app.post("/create/todo", (req, res) => {
    const { task, description, deadline, isCompleted, priority } = req.body;
    const newTask = new todoModel({
      task,
      description,
      deadline,
      isCompleted,
      priority,
    });
    newTask
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  //Q4
  app.get("/todos/completed", (req, res) => {
    todoModel
      .find({ isCompleted: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  //Q5
  app.put("/update/todo", (req, res) => {
    const { task, description, deadline, isCompleted, priority } = req.body;
    todoModel
      .findOneAndUpdate(
        { task },
        { description, deadline, isCompleted, priority }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  //Q6
  app.delete("/delete/todo", (req, res) => {
    const { task, description, deadline, isCompleted, priority } = req.body;
    todoModel
      .deleteOne({ task }, { description, deadline, isCompleted, priority })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});