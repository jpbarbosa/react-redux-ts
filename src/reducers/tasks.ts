import { tasks as initialTasks } from '../data/tasks';
import { TasksState, ActionType, TaskAction } from '../types/tasks';

const initialState: TasksState = {
  active: undefined,
  all: [],
};

export const tasks = (
  state: TasksState = initialState,
  action: TaskAction
): TasksState => {
  switch (action.type) {
    case ActionType.FETCH_TASKS:
      return { ...state, all: initialTasks };
    case ActionType.CREATE_TASK:
      if (action.payload) {
        return { ...state, all: [...state.all, action.payload] };
      }
  }

  return state;
};
