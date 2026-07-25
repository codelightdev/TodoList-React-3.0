import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout/RootLayout"
import Home from "./pages/Home/Home"

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App