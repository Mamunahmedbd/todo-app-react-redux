import cancelImage from "../assets/images/cancel.png";
// import { isEditabled } from "./Redux/Todos/Action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toggleStatus from "./Redux/Todos/Thunk/toggleStatus";
import thunkColorChange from "./Redux/Todos/Thunk/thunkColorChange";
import thunkTodoDelete from "./Redux/Todos/Thunk/ThunkTodoDelete";
import thunkUpdatedText from "./Redux/Todos/Thunk/thunkUpdateText";
import thunkIsEditable from "./Redux/Todos/Thunk/thunkIsEditable";

export default function Todo({ text, id, color, completed, isEditable }) {
  const [updatedInput, setUpdatedInput] = useState();
  const dispatch = useDispatch();
  const handleBagde = (idee, completedData) => {
    dispatch(toggleStatus(idee, completedData));
  };
  const handleDelete = (dId) => {
    dispatch(thunkTodoDelete(dId));
  };
  const handleColor = (todoId, todoColor) => {
    dispatch(thunkColorChange(todoId, todoColor));
    console.log(todoColor);
  };
  const handleEditable = (todoId, todoEditable) => {
    dispatch(thunkIsEditable(todoId, todoEditable));
  };
  const handleUpdateText = (id, updatInput, upEditable) => {
    dispatch(thunkUpdatedText(id, updatInput, upEditable));
  };
  // const handleInputValue = (e) => {
  //   setUpdatedInput(e.target.value)
  // }
  return (
    <div className="relative flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2  ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          checked={completed}
          onChange={() => handleBagde(id, completed)}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      {/* Editable input  */}

      {isEditable ? (
        <div className="select-none flex-1">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              value={updatedInput}
              onChange={(e) => setUpdatedInput(e.target.value)}
            />
            <button
              onClick={() => handleUpdateText(id, updatedInput, isEditable)}
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <>
          <svg
            onClick={() => {
              handleEditable(id, isEditable);
              setUpdatedInput(text);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <div className={`${!completed && "line-through"} select-none flex-1`}>
            {text}
          </div>
        </>
      )}

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColor(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColor(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColor(id, "red")}
      ></div>

      <img
        onClick={() => handleDelete(id)}
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
