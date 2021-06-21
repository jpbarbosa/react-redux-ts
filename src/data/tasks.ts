import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/tasks';

export const tasks: Task[] = [
  {
    id: uuidv4(),
    name: 'Wake Up',
  },
  {
    id: uuidv4(),
    name: 'Work',
  },
  {
    id: uuidv4(),
    name: 'Sleep',
  },
  {
    id: uuidv4(),
    name: 'Repeat',
  },
];
