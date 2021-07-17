import React from "react"

export default function Form({inputText, setInputText, todos, setTodos}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, done: false, id: Math.floor(Math.random() * 1000)}])
        setInputText("")
    }
    return (
    <form className=" mx-auto px-32 my-3">
        <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        className="bg-gray-100 shadow-md w-80 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2" name="todo" />
        <button
            type="submit"
            onClick={submitTodoHandler}
            className="px-4 shadow-md py-2 rounded-md mx-2 bg-gray-700 hover:bg-gray-800 text-gray-100">
            Add Task
        </button>
    </form>
    )
}