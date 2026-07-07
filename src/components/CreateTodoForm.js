import { useState } from "react";

function CreateTodoForm({ createTodo }) {
  const [todoText, setTodoText] = useState("");

  function onChangeTodoTextHandler(todoText) {
    setTodoText(todoText);
    console.log(todoText);
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
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateTodoForm;
