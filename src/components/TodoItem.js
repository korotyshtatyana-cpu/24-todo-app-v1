import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import styles from "./TodoItem.module.css";
import Button from "./Button";

function TodoItem({ id, text, isCompleted, deleteItemAction, completeItemAction }) {
  return (
    <div className={`${styles.todo} ${isCompleted ? styles.completedTodo : ""}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>

      {/* <Button onClick={() => deleteItemAction(id)} title="Delete Item">
        <RiDeleteBin2Line className={styles.deleteIcon} />
      </Button>
      <Button onClick={() => completeItemAction(id)} title="Complete Item">
        <FaCheck className={styles.checkIcon} />
      </Button> */}

      <FaCheck className={styles.checkIcon} onClick={() => completeItemAction(id)} />
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteItemAction(id)} />
    </div>
  );
}

export default TodoItem;
