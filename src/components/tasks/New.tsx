import React from 'react';
import { TaskForm } from './Form';
import { useTasks } from '../../hooks/useTasks';

export const TaskNew: React.FC = () => {
  const { tasks, handleAction, handleActiveTask } = useTasks();

  return (
    <div className="new">
      {tasks.active && tasks.active.id === undefined ? (
        <TaskForm activeTask={tasks.active} handleAction={handleAction} />
      ) : (
        <button
          className="bt-new"
          onClick={() => handleActiveTask({ name: '' })}
        >
          New Task
        </button>
      )}
    </div>
  );
};
