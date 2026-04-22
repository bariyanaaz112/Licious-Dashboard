import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskForm } from './Form';

describe('TaskForm', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('renders all form fields and submit button', () => {
    render(<TaskForm onSubmit={onSubmit} />);

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Task/i })).toBeInTheDocument();
  });

  it('calls onSubmit with correct values when the form is submitted', () => {
    render(<TaskForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText(/Title/i), {
      target: { value: 'Licious Project' },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: 'Assessment' },
    });
    fireEvent.change(screen.getByLabelText(/Priority/i), {
      target: { value: 'High' },
    });
    fireEvent.change(screen.getByLabelText(/Due Date/i), {
      target: { value: '2026-04-22' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Add Task/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Licious Project',
      description: 'Assessment',
      priority: 'High',
      dueDate: '2026-04-22',
    });
  });
});
