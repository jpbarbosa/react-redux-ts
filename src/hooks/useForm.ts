import { useEffect, useState } from 'react';

export const useForm = <T>(
  initialState: T,
  handleAction: Function,
  focus: React.RefObject<HTMLInputElement>
) => {
  const [formState, setFormState] = useState<T>(initialState);

  useEffect(() => {
    focus.current?.focus();
  }, [focus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAction(formState);
  };

  return { formState, handleChange, handleSubmit };
};
