import React from 'react';
import { TaskForm } from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { createTask, setActiveTask } from '../../actions/tasks';
import { Task, TasksState } from '../../types/tasks';
import { StoreState } from '../../types/store';

export const TaskNew: React.FC = () => {
  const tasks = useSelector<StoreState, TasksState>((state) => state.tasks);

  const dispatch = useDispatch();

  const handleAction = (task: Task) => {
    dispatch(createTask(task));
  };

  const handleActiveTask = (task: Task) => {
    dispatch(setActiveTask(task));
  };

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
