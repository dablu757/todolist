import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todo List</h3>
      {todos.length === 0 ? (
        <p>There is no item </p>
      ) : (
        todos.map((ele) => {
          return <TodoItem todo={ele} key={ele.sno} onDelete = {()=>{onDelete(ele)}}/>;
        })
      )}
    </div>
  );
};

export default Todos;
