//=============== Before ========================
// Імпортуємо функцію композиції редюсерів
// import { combineReducers } from 'redux';
// import { statusFilters } from './constants';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// // Відповідає лише за оновлення властивості tasks
// // Тепер значенням параметра state буде масив завдань
// const tasksReducer = (state = tasksInitialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];
//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);
//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// // // Використовуємо initialState як значення стану за умовчанням
// // export const rootReducer = (state = initialState, action) => {
// //   // Редюсер розрізняє екшени за значенням властивості type
// //   switch (action.type) {
// //     // Залежно від типу екшену виконуватиметься різна логіка
// //     case 'tasks/addTask':
// //       // Потрібно повернути новий об'єкт стану
// //       return {
// //         // в якому є всі дані існуючого стану
// //         ...state,
// //         // та новий масив задач
// //         tasks: [
// //           // в якому є всі існуючі завдання
// //           ...state.tasks,
// //           // та об'єкт нового завдання
// //           action.payload,
// //         ],
// //       };

// //     case 'tasks/deleteTask':
// //       return {
// //         ...state,
// //         // Bикористовуємо метод Array.filter() для того, щоб
// //         // іммутабельно створити новий масив без цього завдання
// //         tasks: state.tasks.filter(task => task.id !== action.payload),
// //       };
// //     case 'tasks/toggleCompleted':
// //       return {
// //         ...state,
// //         //   Bикористовуємо метод Array.map() для того, щоб іммутабельно
// //         //   створити новий масив із зміненим значенням властивості
// //         //   completed у задачі з відповідним ідентифікатором.
// //         //   Перевіряємо, чи відповідає тип відправленого екшену
// //         //   рядку "tasks/toggleCompleted" та повертаємо новий
// //         //   об'єкт стану.
// //         tasks: state.tasks.map(task => {
// //           if (task.id !== action.payload) {
// //             return task;
// //           }
// //           return {
// //             ...task,
// //             completed: !task.completed,
// //           };
// //         }),
// //       };
// //     case 'filters/setStatusFilter':
// //       return {
// //         ...state,
// //         //   При зміні фільтра нам доступне нове значення фільтра payload,
// //         //   тому перевіряємо чи відповідає тип відправленого екшену рядку
// //         //   "filters/setStatusFilter" та повертаємо новий об'єкт стану.
// //         filters: {
// //           ...state.filters,
// //           status: action.payload,
// //         },
// //       };
// //     default:
// //       // Кожен редюсер отримує всі екшени, відправлені в стор.
// //       // Якщо редюсер не повинен обробляти якийсь тип екшену,
// //       // необхідно повернути наявний стан без змін.
// //       return state;
// //   }
// // };

// const filtersInitialState = {
//   status: statusFilters.all,
// };
// // Відповідає лише за оновлення властивості filters
// // Тепер значенням параметра state буде об'єкт фільтрів
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // // Код редюсерів tasksReducer та filtersReducer

// // export const rootReducer = (state = {}, action) => {
// //   // Повертаємо об'єкт стану
// //   return {
// //     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
// //     tasks: tasksReducer(state.tasks, action),
// //     filters: filtersReducer(state.filters, action),
// //   };
// // };

// //або задопомогою combineReducers

// // Код редюсерів tasksReducer та filtersReducer

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

//=============== After ========================
import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';

const taskInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(taskInitialState, {
  [addTask]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    return state.map(task => {
      if (task.id !== action.payload) {
        return task;
      }
      return { ...task, completed: !task.completed };
    });
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  },
});
