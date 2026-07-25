import { useEffect, useRef, useState } from "react"
import { assets } from "../../data/data"
import TodoItems from "./TodoItems"


function Todo() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])
  const inputRef = useRef()
  const addTodo = () => {
    const inputText = inputRef.current.value.trim();

    if(inputText === "") return null

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList([...todoList, newTodo])
    inputRef.current.value = ""
  }

  const toggleStatus = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo))
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id != id))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl">

      {/* Title */}

      <div className="flex items-center mt-7 gap-2">
        <img src={assets.todoIcon} className="w-8" alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input Box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input ref={inputRef} type="text" placeholder="Add your task" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" />
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer" onClick={addTodo}>Add +</button>
      </div>

      {/* Todo List */}
      <div>
        {todoList.map(item => (
          <TodoItems key={item.id} id={item.id} text={item.text} isComplete={item.isComplete} deleteTodo={deleteTodo} toggleStatus={toggleStatus}/>
        ))}
      </div>

      </div>
    </>
  )
}

export default Todo