import Button from "./ui/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

function Actions({ resetTodoList, deleteCompletedTasks, hasTasks, hasCompletedTasks }) {
  if (!hasTasks) {
    return <></>;
  }

  return (
    <>
      <Button onClick={resetTodoList} titile="Reset">
        <RiRefreshLine />
      </Button>

      <Button
        onClick={deleteCompletedTasks}
        titile=" Delete completed"
        disable={!hasCompletedTasks}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default Actions;
