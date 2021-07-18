import React from "react"

export default function Form({inputText, setInputText, todos, setTodos, setStatus}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText.trim(), done: false, id: Math.floor(Math.random() * 1000)}])
        setInputText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
    <form className=" mx-auto md:px-32 px-8 my-3">
        <input
            type="text"
            value={inputText}
            onChange={inputTextHandler}
            className="bg-gray-100 shadow-md md:w-80 w-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2" name="todo" />
        <button
            type="submit"
            onClick={submitTodoHandler}
            className="px-4 shadow-md py-2 rounded-md mx-2 bg-gray-700 hover:bg-gray-800 text-gray-100">
            Add Task
        </button>
        <select
         onChange={statusHandler}
         name="filter"
         className="w-20 rounded-md h-10 bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2">
            <option value="All">All</option>
            <option value="Todo">To-do</option>
            <option value="Done">Done</option>
        </select>
    </form>
    )
}