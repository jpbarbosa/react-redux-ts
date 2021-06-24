import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import { Task } from '../../types/tasks';
import { TaskForm } from './Form';

interface IProps {
  task: Task;
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  const { tasks, handleAction, handleRemove, handleActiveTask } = useTasks();

  return (
    <>
      {tasks.active && tasks.active.id === task.id ? (
        <TaskForm activeTask={tasks.active} handleAction={handleAction} />
      ) : (
        <div className="item">
          <span onClick={() => handleActiveTask(task)}>{task.name}</span>
          <button className="bt-remove" onClick={() => handleRemove(task)}>
            X
          </button>
        </div>
      )}
    </>
  );
};
