import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../types/store';
import { Task, TasksState } from '../types/tasks';
import {
  fetchTasks,
  createTask,
  updateTask,
  removeTask,
  setActiveTask,
} from '../actions/tasks';

export const useTasks = (fetch = false) => {
  const tasks = useSelector<StoreState, TasksState>((state) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetch) {
      dispatch(fetchTasks());
    }
  }, [fetch, dispatch]);

  const handleAction = (task: Task) => {
    if (tasks.active?.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }
    dispatch(setActiveTask(undefined));
  };

  const handleRemove = (task: Task) => {
    dispatch(removeTask(task));
  };

  const handleActiveTask = (task: Task) => {
    dispatch(setActiveTask(task));
  };

  return { tasks, handleAction, handleRemove, handleActiveTask };
};
