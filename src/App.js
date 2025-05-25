import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Get todos from localStorage
  const getInitialTodos = () => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  // Save todos to localStorage on change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo
  const addTodo = (title, description) => {
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 0;
    const newTodo = { sno, title, description };
    setTodos([...todos, newTodo]);
  };

  // Delete todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
