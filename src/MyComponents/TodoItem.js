import React from "react";

const TodoItem = ({ todo }) => {
   console.log(todo)
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <hr />
    </div>
  );
};

export default TodoItem;
