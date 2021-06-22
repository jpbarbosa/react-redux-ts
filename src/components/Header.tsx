import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../types/store';
import { TasksState } from '../types/tasks';

export const Header: React.FC = () => {
  const tasks = useSelector<StoreState, TasksState>((state) => state.tasks);

  return (
    <header>
      <h1>
        <div className="title">React Basic CRUD</div>
        <div className="subtitle">With Redux And TypeScript</div>
      </h1>
      <div className="counter">{tasks.all.length}</div>
    </header>
  );
};
