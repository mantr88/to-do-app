// //=============== Before ========================
// import { legacy_createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// // Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = legacy_createStore(rootReducer, enhancer);

//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
