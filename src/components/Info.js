function Info({ listLength, completedTasksCount }) {
  if (listLength === 0) {
    return <p>List is Empty</p>;
  } else {
    return <p>You complete {completedTasksCount} tasks</p>;
  }
}

export default Info;
