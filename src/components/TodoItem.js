import { RiTodoFill } from "react-icons/ri";

function TodoItem({ id, text, isCompleted, deleteItemAction }) {
  return (
    <div>
      <RiTodoFill />
      <p>{text}</p>
      <button onClick={() => deleteItemAction(id)}>Delete Item</button>
    </div>
  );
}

export default TodoItem;
