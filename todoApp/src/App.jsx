import TodoCreator from "./components/TodoCreator"
import Todos from "./components/Todos"
import { TodoContextProvider } from "./context"


function App() {
  

  return (
    <TodoContextProvider>
      <h1 className="text-8xl font-semibold text-blue-500 text-center p-3 mt-5">Daily Karma</h1>
      <TodoCreator />
      <h3 className="text-blue-300 text-center mt-10 font-bold ">Karmas :</h3>
      <Todos />
    </TodoContextProvider>
  )
}

export default App
