function Info({ listLength }) {
  if (listLength == 0) {
    return <p>List is Empty</p>;
  } else {
    return <p>Tou have {listLength} tasks</p>;
  }
}

export default Info;
