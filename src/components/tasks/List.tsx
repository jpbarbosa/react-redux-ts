import React from 'react';
import { useSelector } from 'react-redux';
import { TaskItem } from './Item';
import { StoreState } from '../../types/store';
import { TasksState } from '../../types/tasks';

export const TaskList: React.FC = () => {
  const tasks = useSelector<StoreState, TasksState>((state) => state.tasks);

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
