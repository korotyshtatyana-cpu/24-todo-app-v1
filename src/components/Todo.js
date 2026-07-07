import TodoItem from "./TodoList";
import CreateTodoForm from "./CreateTodoForm";
import Info from "./Info";
import Actions from "./Actions";

function Todo() {
  return (
    <>
      <h1>Todo List</h1>

      <CreateTodoForm />

      <Actions />

      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />

      <Info />
    </>
  );
}

export default Todo;
