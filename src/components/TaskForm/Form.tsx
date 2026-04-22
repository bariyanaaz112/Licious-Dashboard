import React, { useState, useEffect } from 'react';
import './Form.css';
import type { Priority } from '../../types/Task';

export type TaskFormData = {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
};

const DEFAULT_FORM_STATE: TaskFormData = {
  title: '',
  description: '',
  priority: 'Medium',
  dueDate: '',
};

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  initialData?: TaskFormData;
  isEditing?: boolean;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  initialData,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState<TaskFormData>(DEFAULT_FORM_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData(initialData ?? DEFAULT_FORM_STATE);
  }, [initialData]);

  const updateField = <K extends keyof TaskFormData>(
    field: K,
    value: TaskFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await Promise.resolve(onSubmit(formData));

      if (!isEditing) {
        setFormData({
          title: '',
          description: '',
          priority: 'Medium',
          dueDate: '',
        });
      }

      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter task title"
          className={errors.title ? 'input-error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter task description"
          rows={4}
          className={errors.description ? 'input-error' : ''}
        />
        {errors.description && (
          <span className="error-message">{errors.description}</span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority *</label>
          <select
            id="priority"
            value={formData.priority}
            onChange={(e) =>
              updateField('priority', e.target.value as Priority)
            }
          >
            {(['Low', 'Medium', 'High'] as Priority[]).map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date *</label>
          <input
            id="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={(e) => updateField('dueDate', e.target.value)}
            className={errors.dueDate ? 'input-error' : ''}
          />
          {errors.dueDate && (
            <span className="error-message">{errors.dueDate}</span>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="loader" aria-hidden="true" />
            {isEditing ? 'Updating...' : 'Adding...'}
          </>
        ) : isEditing ? (
          'Update Task'
        ) : (
          'Add Task'
        )}
      </button>
    </form>
  );
};