import React from "react"
// export default function Todo() {
const Todo = ({text, setTodos, todos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id))
    }
    const doneHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, done: !item.done
                }
            }
            return item
        }))
    }
    return (

        <div className="flex justify-between items-baseline mx-32 p-4 mb-3 bg-gray-100 rounded-md">
            <div className={`${todo.done === true ? "opacity-50 line-through" : '' }`}>{text}</div>
            <div>
                <button
                    onClick={deleteHandler}
                    className="bg-gray-100 border-2 border-gray-300  text-red-500 px-4 py-1 rounded-md">
                    Delete
                </button>
                <button
                    onClick={doneHandler}
                    className="px-5 py-1 border-green-500 border-2 rounded-md text-white bg-green-500 mx-2 shadow-md ">
                    Done
                </button>
            </div>
        </div>
    )
}
export default Todo;