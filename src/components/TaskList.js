import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.index}
      text={task.text}
      category={task.category}
      onDelete={onDelete}
    />
  ));
  return <div className="tasks">
    {taskList}
  </div>;
}

export default TaskList;