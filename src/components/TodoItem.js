import { RiTodoFill, RiDeleteBin2Line, RiCheckLine } from "react-icons/ri";

import Button from "./Button";

function TodoItem({ id, text, isCompleted, deleteItemAction, completeItemAction }) {
  return (
    <div>
      <RiTodoFill />
      <p>{text}</p>
      {isCompleted ? <p>complete</p> : <p>NotComplete</p>}
      <Button onClick={() => deleteItemAction(id)} title="Delete Item">
        <RiDeleteBin2Line />
      </Button>
      <Button onClick={() => completeItemAction(id)} title="Complete Item">
        <RiCheckLine />
      </Button>
    </div>
  );
}

export default TodoItem;
