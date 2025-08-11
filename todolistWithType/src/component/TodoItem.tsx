import { useContext } from "react";
import type { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface props extends Todo {}
export default function TodoItem(props: props) {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
