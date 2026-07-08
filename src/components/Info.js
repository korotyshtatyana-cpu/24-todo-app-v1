function Info({ listLength, completedTasksCount }) {
  if (listLength === 0) {
    return <p>List is Empty</p>;
  }
  if (completedTasksCount === 0) {
    return <p>Lest start!</p>;
  }
  if (listLength === completedTasksCount) {
    return <p>You completed all tasks!</p>;
  }
  return (
    <p>
      You complete {completedTasksCount} tasks! {listLength - completedTasksCount} left
    </p>
  );
}

export default Info;
