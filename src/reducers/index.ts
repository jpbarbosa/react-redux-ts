import { combineReducers } from 'redux';
import { StoreState } from '../types/store';
import { tasks } from './tasks';

export const reducers = combineReducers<StoreState>({
  tasks,
});
