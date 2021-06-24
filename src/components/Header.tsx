import React from 'react';
import { useTasks } from '../hooks/useTasks';

export const Header: React.FC = () => {
  const { tasks } = useTasks();

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
