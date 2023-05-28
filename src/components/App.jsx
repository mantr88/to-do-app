import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';
import { fetchTasks } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoading, error } = useSelector(getTasks);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      {/* <AppBar />
      <TaskForm />
      <TaskList /> */}
    </Layout>
  );
};
