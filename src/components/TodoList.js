import React from "react"
import Todo from "./Todo"

export default function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div className="p-2">
            {filteredTodos.map(todo => <Todo text={todo.text} todos={todos} todo={todo} setTodos={setTodos} />)}
        </div>
    )
}