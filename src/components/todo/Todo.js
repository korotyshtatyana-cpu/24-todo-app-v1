import TodoItem from "../todoItem/TodoItem";
import CreateTodoForm from "../createTodoForm/CreateTodoForm";
import Info from "../Info";
import Actions from "../Actions";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Todo.module.css";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [completedTodoCount, setCompletedTodoCount] = useState(0);

  function createTodoHandler(text) {
    setTodoList([...todoList, { id: uuidv4(), text: text, isCompleted: false }]);
  }

  function deleteTodoHandler(id) {
    setTodoList([
      ...todoList.filter((item) => {
        if (item.id !== id) {
          return true;
        } else {
          if (item.isCompleted) {
            setCompletedTodoCount(completedTodoCount - 1);
          }
          return false;
        }
      }),
    ]);
  }

  function completeTodoHandler(id) {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          if (item.isCompleted) {
            setCompletedTodoCount(completedTodoCount - 1);
          } else {
            setCompletedTodoCount(completedTodoCount + 1);
          }
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      }),
    );
  }

  function resetTodoListHandle() {
    setTodoList([]);
    setCompletedTodoCount(0);
  }

  function deleteompletedTasksHandle() {
    setTodoList([...todoList.filter((item) => item.isCompleted === false)]);
    setCompletedTodoCount(0);
  }

  return (
    <>
      <h1>Todo List</h1>

      <CreateTodoForm createTodo={createTodoHandler} />

      <Actions
        resetTodoList={resetTodoListHandle}
        deleteCompletedTasks={deleteompletedTasksHandle}
        hasTasks={todoList.length !== 0}
        hasCompletedTasks={completedTodoCount !== 0}
      />
      <div className={styles.todoListContainer}>
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

      <Info listLength={todoList.length} completedTasksCount={completedTodoCount} />
    </>
  );
}

export default Todo;
