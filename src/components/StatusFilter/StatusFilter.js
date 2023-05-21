// Імпортуємо хук
import { useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
