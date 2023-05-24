import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const taskInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        const idx = state.findIndex(task => task.id !== action.payload);
        state.splice(idx, 1);
      },
    },
    toggleCompleted: {
      reducer(state, action) {
        for (const task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      },
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
