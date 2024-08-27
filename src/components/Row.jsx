import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  completeTaskAction,
  deleteTaskAction,
  editTaskAction,
} from "../utils/actions/actions";
import { Edit, Trash } from "lucide-react";

function Row({ task, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(task.text);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  function handleSaveEdit() {
    if (editingText.trim()) {
      setError(""); 
      try {
        dispatch(editTaskAction(task.id, editingText));
        setIsEditing(false);
      } catch (error) {
        setError("Failed to save changes. Please try again.");
      }
    } else {
      setError("Task text cannot be empty.");
    }
  }

  return (
    <li className="flex items-center gap-4  bg-yellow-100 rounded-xl w-full max-w-lg mx-auto">
      {isEditing ? (
        <div className="flex items-center gap-4 p-2 w-full">
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            className="border w-full sm:w-60 h-10 bg-yellow-50 px-2 py-1 rounded-xl"
          />
          <button
            className="px-2 py-1 rounded-xl bg-yellow-400 text-white"
            onClick={handleSaveEdit}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full bg-yellow-100 p-2 justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg sm:text-xl font-semibold">{index + 1}.</p>
            <span
              onClick={() => dispatch(completeTaskAction(task.id))}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className="text-lg sm:text-xl font-semibold cursor-pointer"
            >
              {task.text}
            </span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button onClick={() => setIsEditing(true)}>
              <Edit size={20} sm:size={25} color="black" />
            </button>
            <button onClick={() => {
              try {
                dispatch(deleteTaskAction(task.id));
              } catch (error) {
                setError("Failed to delete task. Please try again.");
              }
            }}>
              <Trash size={20} sm:size={25} color="black" />
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </li>
  );
}

export default Row;
