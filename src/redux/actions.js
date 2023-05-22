import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
//=============== Before ========================
// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };
//=============== After ========================
export const addTask = createAction('tasks/addTask', text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask', taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
});

export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
});

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  value => {
    return {
      type: 'filters/setStatusFilter',
      payload: value,
    };
  }
);
