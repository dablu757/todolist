import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({todos}) => {
    // todos.forEach(element => {
    //     console.log(element)
    // });
    return (
        <div className="container">
          <h3>Todo List</h3>
          {todos.length === 0 ? (
            <p>No todos to display</p>
          ) : (
            todos.map((todo) => <TodoItem todo={todo} key={todo.sno} />)
          )}
        </div>
    );  
};

export default Todos;
