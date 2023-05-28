import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';
// ============Before================================
// const taskInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: taskInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask: {
//       reducer(state, action) {
//         const idx = state.findIndex(task => task.id !== action.payload);
//         state.splice(idx, 1);
//       },
//     },
//     toggleCompleted: {
//       reducer(state, action) {
//         for (const task of state) {
//           if (task.id === action.payload) {
//             task.completed = !task.completed;
//             break;
//           }
//         }
//       },
//     },
//   },
// });

// // Експортуємо генератори екшенів та редюсер
// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;

// ================After================================
const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: {
    [fetchTasks.pending](state, action) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // // Виконається в момент старту HTTP-запиту
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // // Виконається якщо HTTP-запит завершився успішно
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // // Виконається якщо HTTP-запит завершився з помилкою
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
