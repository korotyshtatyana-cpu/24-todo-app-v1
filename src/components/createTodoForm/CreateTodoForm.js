import { useState } from "react";
import styles from "./CreateTodoForm.module.css";

import Button from "../ui/Button";

function CreateTodoForm({ createTodo }) {
  const [todoText, setTodoText] = useState("");

  function onChangeTodoTextHandler(todoText) {
    setTodoText(todoText);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    createTodo(todoText);
    setTodoText("");
  }

  return (
    <div className={styles.createTodoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="New Todo"
          value={todoText}
          onChange={(e) => {
            onChangeTodoTextHandler(e.target.value);
          }}
        ></input>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}

export default CreateTodoForm;
