import React from "react"
// export default function Todo() {
const Todo = () => {
    return (

        <div className="flex justify-between items-baseline mx-32 p-4 mb-3 bg-gray-100 rounded-md">
            <div> Import a statment</div>
            <div>
                <button
                    className="bg-gray-100 border-2 border-gray-300  text-red-500 px-4 py-1 rounded-md">
                    Delete
                </button>
                <button
                    className="px-5 py-1 border-green-500 border-2 rounded-md text-white bg-green-500 hover:border-green-600 hover:bg-green-600 mx-2 shadow-md ">
                    Done
                </button>
            </div>
        </div>
    )
}
export default Todo;