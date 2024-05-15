import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            title: "Todo Title"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const {id, title} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        }
    }
});


export const {addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;