import React from "react"
export default function Todo() {
    return (

        <div className="flex justify-between items-baseline mx-32 p-4 mb-3 bg-gray-100 rounded-md">
            <div> Import a statment</div>
            <div><button className="bg-gray-200 border-2 border-gray-300 hover:bg-gray-100 text-red-500 px-4 py-1 rounded-md">delete</button></div>
        </div>
    )
}