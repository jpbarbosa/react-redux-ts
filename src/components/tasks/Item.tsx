import React from 'react';
import { Task } from '../../types/tasks';

interface IProps {
  task: Task;
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  return (
    <div className="item">
      <span>{task.name}</span>
      <button className="bt-remove">X</button>
    </div>
  );
};
