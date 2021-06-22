import { v4 as uuidv4 } from 'uuid';
import { TaskAction, ActionType, Task } from '../types/tasks';

export const fetchTasks = (): TaskAction => {
  return {
    type: ActionType.FETCH_TASKS,
  };
};

export const createTask = (task: Task): TaskAction => {
  return {
    type: ActionType.CREATE_TASK,
    payload: {
      ...task,
      id: uuidv4(),
    },
  };
};
