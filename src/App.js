import { useState } from "react";
import Form from "./components/Form"
import TodoList from "./components/TodoList";
import './index.css';
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <Form
       inputText={inputText} setInputText={setInputText}
       todos={todos} setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
