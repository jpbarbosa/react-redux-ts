import React from 'react';
import { TaskItem } from './Item';
import { tasks } from '../../data/tasks';

export const TaskList: React.FC = () => {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
