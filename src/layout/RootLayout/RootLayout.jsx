import { Outlet } from "react-router-dom"
import TodoListContextProvider from "../../context/TodoListContext/TodoListContextProvider"

function RootLayout() {
  return (
    <> 
      <TodoListContextProvider>
        <Outlet />
      </TodoListContextProvider>
    </>
  )
}

export default RootLayout