import { v4 as uuidv4 } from 'uuid';
import {
  TaskActionCreator as ActionCreator,
  ActionType,
  Task,
} from '../types/tasks';

export const fetchTasks = (): ActionCreator => {
  return {
    type: ActionType.FETCH_TASKS,
  };
};

export const createTask = (task: Task): ActionCreator => {
  return {
    type: ActionType.CREATE_TASK,
    payload: {
      ...task,
      id: uuidv4(),
    },
  };
};

export const updateTask = (task: Task): ActionCreator => {
  return {
    type: ActionType.UPDATE_TASK,
    payload: task,
  };
};

export const removeTask = (task: Task): ActionCreator => {
  return {
    type: ActionType.REMOVE_TASK,
    payload: task,
  };
};

export const setActiveTask = (task?: Task): ActionCreator => {
  return {
    type: ActionType.SET_ACTIVE_TASK,
    payload: task,
  };
};
