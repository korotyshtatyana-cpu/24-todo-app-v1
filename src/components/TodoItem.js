import { RiTodoFill } from "react-icons/ri";

function TodoItem({ id, text, isCompleted, deleteItemAction, completeItemAction }) {
  return (
    <div>
      <RiTodoFill />
      <p>{text}</p>
      {isCompleted ? <p>complete</p> : <p>NotComplete</p>}
      <button onClick={() => deleteItemAction(id)}>Delete Item</button>
      <button onClick={() => completeItemAction(id)}>Complete Item</button>
    </div>
  );
}

export default TodoItem;
