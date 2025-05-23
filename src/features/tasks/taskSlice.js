import { createSlice, nanoid } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        list: [],
        filter: 'all',
    },
    reducers: {
        addTask: (state, action) => {
            state.list.push({
                id: nanoid(),
                description: action.payload,
                isDone: false,
            });
        },
        toggleDone: (state, action) => {
            const task = state.list.find(t => t.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.list.find(t => t.id === id);
            if (task) task.description = description;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleDone, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
