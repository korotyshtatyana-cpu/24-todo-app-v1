import TodoItem from "./TodoItem";
import CreateTodoForm from "./CreateTodoForm";
import Info from "./Info";
import Actions from "./Actions";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  function createTodoHandler(text) {
    setTodoList([...todoList, { id: uuidv4(), text: text, isCompleted: false }]);
  }

  function deleteTodoHandler(id) {
    setTodoList([...todoList.filter((item) => item.id != id)]);
  }

  function completeTodoHandler(id) {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      }),
    );
  }

  return (
    <>
      <h1>Todo List</h1>

      <CreateTodoForm createTodo={createTodoHandler} />

      <Actions />
      <div>
        {todoList.map((item) => {
          return (
            <TodoItem
              {...item}
              key={item.id}
              deleteItemAction={deleteTodoHandler}
              completeItemAction={completeTodoHandler}
            />
          );
        })}
      </div>

      <Info listLength={todoList.length} />
    </>
  );
}

export default Todo;
