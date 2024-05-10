import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            todo: "Title",
            completed: false,
            id: 1
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export function useTodo(){
    return useContext(TodoContext);
}
