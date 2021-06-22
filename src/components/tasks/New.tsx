import React from 'react';
import { TaskForm } from './Form';
import { useDispatch } from 'react-redux';
import { createTask } from '../../actions/tasks';
import { Task } from '../../types/tasks';

export const TaskNew: React.FC = () => {
  const dispatch = useDispatch();

  const handleAction = (task: Task) => {
    dispatch(createTask(task));
  };

  return (
    <div className="new">
      <TaskForm handleAction={handleAction} />
    </div>
  );
};
