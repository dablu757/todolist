import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    console.log(e);
    e.preventDefault();     
    if (!title || !description) {
      alert("Title or Description cannot be blank");
      return;
    } else {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn-sm btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
