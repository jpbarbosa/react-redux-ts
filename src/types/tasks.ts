export interface Task {
  id?: string;
  name: string;
}

export interface TasksState {
  active?: Task;
  all: Task[];
}

export enum ActionType {
  FETCH_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  SET_ACTIVE_TASK,
}

export interface TaskAction {
  type: ActionType;
  payload?: Task;
}
