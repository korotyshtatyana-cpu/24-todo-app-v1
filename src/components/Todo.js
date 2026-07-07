import TodoItem from "./TodoItem";
import CreateTodoForm from "./CreateTodoForm";
import Info from "./Info";
import Actions from "./Actions";
import { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  function createTodoHandler(text) {
    setTodoList([...todoList, { id: idCounter, text: text, isCompleted: false }]);
    setIdCounter(idCounter + 1);
  }

  function deleteTodoHandler(id) {
    console.log("deleteTodoHandler");
    console.log(id);
    setTodoList([...todoList.filter((item) => item.id != id)]);
  }

  return (
    <>
      <h1>Todo List</h1>

      <CreateTodoForm createTodo={createTodoHandler} />

      <Actions />
      <div>
        {todoList.map((item) => {
          return <TodoItem {...item} key={item.id} deleteItemAction={deleteTodoHandler} />;
        })}
      </div>

      <Info listLength={todoList.length} />
    </>
  );
}

export default Todo;
