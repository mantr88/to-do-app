import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { selectVisibleTasks } from 'redux/selectors';

export const TaskList = () => {
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
