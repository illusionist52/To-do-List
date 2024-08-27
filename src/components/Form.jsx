import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../utils/actions/actions";

function Form() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      setError(""); // Clear any previous error
      try {
        dispatch(addTaskAction(task));
        setTask("");
      } catch (error) {
        setError("Failed to add task. Please try again.");
      }
    } else {
      setError("Task cannot be empty.");
    }
  }
  
  return (
    <form className="bg-purple-100 flex flex-col sm:flex-row items-center gap-4 px-4 rounded-lg py-4 max-w-xl mx-auto">
      <label htmlFor="" className="text-xl sm:text-2xl font-semibold">
        Add a task:
      </label>
      <input
        className="rounded-xl w-full sm:w-72 h-10 px-2 border-0 bg-white"
        placeholder="Complete your assignment"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="px-4 py-2 text-lg sm:text-xl font-bold bg-purple-400 text-white rounded-xl"
        onClick={handleSubmit}
      >
        Add
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
}

export default Form;
