import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTask, updateTask } from '../../actions/tasks';
import { StoreState } from '../../types/store';
import { Task, TasksState } from '../../types/tasks';
import { TaskForm } from './Form';

interface IProps {
  task: Task;
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  const tasks = useSelector<StoreState, TasksState>((state) => state.tasks);
  const dispatch = useDispatch();

  const handleActiveTask = (task: Task) => {
    dispatch(setActiveTask(task));
  };

  const handleAction = (task: Task) => {
    dispatch(updateTask(task));
    dispatch(setActiveTask(undefined));
  };

  return (
    <>
      {tasks.active && tasks.active.id === task.id ? (
        <TaskForm activeTask={tasks.active} handleAction={handleAction} />
      ) : (
        <div className="item">
          <span onClick={() => handleActiveTask(task)}>{task.name}</span>
          <button className="bt-remove">X</button>
        </div>
      )}
    </>
  );
};
