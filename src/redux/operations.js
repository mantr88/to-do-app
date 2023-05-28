import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './tasksSlice';

axios.defaults.baseURL = 'https://647339e1d784bccb4a3c5cea.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const response = await axios.get('/tasks');

    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
