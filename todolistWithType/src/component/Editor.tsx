import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

const Editor = () => {
  //const dispatch = useContext(TodoDispatchContext);
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    //  dispatch?.onClickAdd(text);
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </>
  );
};

export default Editor;
