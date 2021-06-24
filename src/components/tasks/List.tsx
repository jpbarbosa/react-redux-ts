import React from 'react';
import { TaskItem } from './Item';
import { useTasks } from '../../hooks/useTasks';

export const TaskList: React.FC = () => {
  const { tasks } = useTasks(true);

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
