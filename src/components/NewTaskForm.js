import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("New");
  function handleFormSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("New")
  }
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;