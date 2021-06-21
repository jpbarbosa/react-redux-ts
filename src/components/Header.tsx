import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <h1>
        <div className="title">React Basic CRUD</div>
        <div className="subtitle">With Redux And TypeScript</div>
      </h1>
      <div className="counter">0</div>
    </header>
  );
};
