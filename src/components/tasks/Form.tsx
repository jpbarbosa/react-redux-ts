import React, { useState } from 'react';
import { Task } from '../../types/tasks';

export const TaskForm: React.FC = () => {
  const [formState, setFormState] = useState<Task>({ name: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Task description"
      />
      <input type="submit" />
    </form>
  );
};
