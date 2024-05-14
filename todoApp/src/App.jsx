import { useEffect, useState } from "react"
import TodoCreator from "./components/TodoCreator"
import Todos from "./components/Todos"
import { TodoContextProvider } from "./context"


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {id:Date.now(), todo:todo, completed: false}]);
  }

  const updateTodo = (id, todo) => {
    
  }  

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  }

  const toggleComplete = () => {

  }

  useEffect(() => {
    // console.log(todos);
  }, [todos])
  

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className="text-8xl font-semibold text-blue-500 text-center p-3 mt-5">Daily Karma</h1>
      <TodoCreator />
      <h3 className="text-blue-300 text-center mt-10 font-bold ">Karmas :</h3>
      {todos.map((todo) => (
        <Todos id={todo.id} name={todo.todo} key={todo.id} />
      ))}

    </TodoContextProvider>
  )
}

export default App
