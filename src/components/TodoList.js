import React from "react"
import Todo from "./Todo"

export default function TodoList({todos, setTodos}) {
    function todoFetch() {
        if(todos.length > 0) {
            return todos
            .map( todo =>
                            <Todo
                                text={todo.text}
                                key={todo.id}
                                todos={todos}
                                todo={todo}
                                setTodos={setTodos}
                            />
            )
        } else {
            return (
                <div className="px-32">
                    <div className="bg-green-50 shadow-sm h-64 p-5 rounded-md">
                        <p className="text-center text-xl font-mono">You can have the rest of the day off !</p>
                    </div>
                </div>
            )
        }
}
    return (
        <div className="p-2">
            {todoFetch()}
        </div>
    )
}