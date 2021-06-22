import { TaskAction, ActionType } from '../types/tasks';

export const fetchTasks = (): TaskAction => {
  return {
    type: ActionType.FETCH_TASKS,
  };
};
