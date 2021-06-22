import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TaskItem } from './Item';
import { StoreState } from '../../types/store';
import { TasksState } from '../../types/tasks';
import { fetchTasks } from '../../actions/tasks';

export const TaskList: React.FC = () => {
  const tasks = useSelector<StoreState, TasksState>((state) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="list">
      <ul>
        {tasks.all.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
