export interface Task {
  id?: string;
  name: string;
}

export interface TasksState {
  active?: Task;
  all: Task[];
}
