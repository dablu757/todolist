import React from "react";

const TodoItem = ({ todo , onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete} >Delete</button>
      <hr />
    </div>
  );
};

export default TodoItem;
 