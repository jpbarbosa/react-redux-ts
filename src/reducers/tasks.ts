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
      return { ...state, all: [...state.all, action.payload] };
    case ActionType.UPDATE_TASK:
      return {
        ...state,
        all: state.all.map((task) =>
          task.id === state.active?.id ? action.payload : task
        ),
      };
    case ActionType.REMOVE_TASK:
      return {
        ...state,
        all: state.all.filter((task) => task.id !== action.payload.id),
      };
    case ActionType.SET_ACTIVE_TASK:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
