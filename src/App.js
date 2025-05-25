import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from "react";

function App() {
  // this is todo delete function
  const onDelete = (todo) => {
    console.log("i am delete of", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))

    // deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
  };

  // here setTodos is a function which is use to update function
  const [todos, setTodos] = useState([
    { sno: 1, title: "go to the market", description: "you need to go market to done job1" },
    { sno: 2, title: "go to the home", description: "you need to go market to done job2" },
    { sno: 3, title: "go to the office", description: "you need to go market to done job2" },
  ]);

  // return
  return (
    <>
      <Header />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
