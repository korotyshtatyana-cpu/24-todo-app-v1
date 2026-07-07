import TodoItem from "./TodoItem";
import CreateTodoForm from "./CreateTodoForm";
import Info from "./Info";
import Actions from "./Actions";
import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  function createTodoHandler(text) {
    setTodoList([...todoList, { id: todoList.length, text: text, isCompleted: false }]);
  }

  return (
    <>
      <h1>Todo List</h1>

      <CreateTodoForm createTodo={createTodoHandler} />

      <Actions />
      <div>
        {todoList.map((item) => {
          return <TodoItem {...item} key={item.id} />;
        })}
      </div>

      <Info listLength={todoList.length} />
    </>
  );
}

export default Todo;
