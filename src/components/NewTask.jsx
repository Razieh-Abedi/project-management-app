import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleChangeTaskInput(e) {
    setTaskInput(e.target.value);
  }
  function handleAddTask() {
    if (taskInput.trim() === "") {
      return; 
    }
    onAddTask(taskInput);
    setTaskInput("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={taskInput}
        onChange={handleChangeTaskInput}
        className="w-64 rounded-sm py-1 px-2 bg-stone-200"
      />
      <button
        className="text-stone-700 hover:bg-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
