function TodoItem({ id, text, isCompleted, deleteItemAction }) {
  return (
    <>
      <p>{text}</p>
      <button onClick={() => deleteItemAction(id)}>Delete Item</button>
    </>
  );
}

export default TodoItem;
