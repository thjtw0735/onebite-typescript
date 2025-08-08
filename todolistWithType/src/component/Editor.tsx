import { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

const Editor = (props: Props) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
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
