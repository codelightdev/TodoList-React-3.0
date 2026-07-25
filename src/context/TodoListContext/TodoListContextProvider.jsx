import { useEffect, useRef, useState } from "react";
import { TodoListContext } from "./TodoListContext";


function TodoListContextProvider(props) {
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
    <TodoListContext.Provider value={{ todoList, addTodo, toggleStatus, deleteTodo, inputRef }}>
        {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider