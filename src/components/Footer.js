import { useSelector, useDispatch } from "react-redux";
//eslint-disable-next-line
import { colorChange, statusChange } from "./Redux/Filters/Action";

const numOfLength = (nun_of_length) => {
  switch (nun_of_length) {
    case 0:
      return "No Complete task";
    case 1:
      return "Only 1 task Completed";

    default:
      return `${nun_of_length} 'Tasks Completed'`;
  }
};

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const todoRamining = todos.filter((todo) => todo.completed).length;
  //eslint-disable-next-line
  const { status, colors } = filters;
  const dispatch = useDispatch();

  const handleColorChangle = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
      dispatch(colorChange(color, "added"));
    }
  };

  // const handleStatusChange = (status) => {
  //   dispatch(statusChange(status));
  // };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p className="text-green-500">{numOfLength(todoRamining)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        {/* <li
          className={`${status === "All" && "font-bold"} cursor-pointer`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`${status === "Incomplete" && "font-bold"} cursor-pointer`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`${status === "Complete" && "font-bold"} cursor-pointer`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li> */}
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChangle("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChangle("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChangle("yellow")}
        ></li>
      </ul>
    </div>
  );
}
