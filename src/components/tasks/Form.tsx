import React, { useRef } from 'react';
import { Task } from '../../types/tasks';
import { useForm } from '../../hooks/useForm';

interface IProps {
  activeTask: Task;
  handleAction: Function;
}

export const TaskForm: React.FC<IProps> = ({ activeTask, handleAction }) => {
  const focus = useRef<HTMLInputElement>(null);
  const { formState, handleChange, handleSubmit } = useForm<Task>(
    activeTask,
    handleAction,
    focus
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Task description"
        ref={focus}
      />
      <input type="submit" />
    </form>
  );
};
