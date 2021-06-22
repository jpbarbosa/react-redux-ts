import { tasks as initialTasks } from '../data/tasks';
import { TasksState } from '../types/tasks';

const initialState: TasksState = {
  active: undefined,
  all: initialTasks,
};

export const tasks = (
  state: TasksState = initialState,
  action: any
): TasksState => {
  return state;
};
