import { useSelector } from "react-redux";

const numOfLength = (nun_of_length) => {
  switch (nun_of_length) {
    case 0:
      return "No task";
    case 1:
      return "1 task left";

    default:
      return `${nun_of_length} 'Tasks Left'`;
  }
};

export default function FooterTop() {
  const todos = useSelector((state) => state.todos);
  const todoRamining = todos.filter((todo) => !todo.completed).length;
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p className="text-red-500">{numOfLength(todoRamining)}</p>
    </div>
  );
}
