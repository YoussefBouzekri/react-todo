import { useEffect, useState } from "react";
import Form from "./components/Form"
import TodoList from "./components/TodoList";
import './index.css';
function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("All")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {

      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos',JSON.stringify([]))
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'))
        setTodos(todoLocal)
      }

  }, [])
  useEffect(() => {
    switch (status) {
      case "Done":
        setFilteredTodos(todos.filter(todo => todo.done === true ))
        break;
      case "Todo":
        setFilteredTodos(todos.filter(todo => todo.done === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
    // Save Local TODOS
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos, status])

  return (
    <div className="App">
      <Form
       inputText={inputText} setInputText={setInputText}
       todos={todos} setTodos={setTodos}
       status={status} setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
