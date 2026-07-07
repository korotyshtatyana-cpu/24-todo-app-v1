import { useState } from "react";

import Button from "./Button";

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
  );
}

export default CreateTodoForm;
