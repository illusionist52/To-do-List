import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

function Table() {
  const list = useSelector((state) => state.list);

  if (!Array.isArray(list)) {
    return <div className="text-red-500">Error: Invalid task list.</div>;
  }

  const sortedList = [...list].sort((a, b) => a.completed - b.completed);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mx-4 my-4 max-w-full">
      <div className="overflow-x-auto  no-scrollbar md:no-scrollbar lg:no-scrollbar">
        <ul className="flex flex-col gap-2 h-96 md:h-80 lg:h-96 w-full">
          {sortedList.length > 0 ? (
            sortedList.map((task, index) => (
              <Row key={task.id} index={index} task={task} />
            ))
          ) : (
            <h2 className="text-2xl md:text-4xl text-center text-gray-300 font-extrabold">
              No tasks added
            </h2>
          )}
          <p className="text-gray-500 text-sm md:text-lg font-medium mt-2">
            Click on the task's name to mark them complete
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Table;
