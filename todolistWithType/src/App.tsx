import { useRef, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.content}</div>
        ))}{" "}
      </div>
    </div>
  );
}

export default App;
