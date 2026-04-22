import React, { useState } from 'react';
import './Card.css';
import type { Task } from '../../types/Task';
import { formatDate, getPriorityColor } from '../../utils/taskFilters';

interface TaskCardProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  isListView?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onToggleStatus,
  onEdit,
  onDelete,
  isListView = false,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(task.id);
    setShowDeleteConfirm(false);
  };

  const priorityColor = getPriorityColor(task.priority);

  if (showDeleteConfirm) {
    return (
      <div className={`task-card ${isListView ? 'list-view' : 'card-view'} delete-confirm`}>
        <div className="confirm-content">
          <h4>Delete Task?</h4>
          <p>{task.title}</p>
          <div className="confirm-buttons">
            <button
              className="btn btn-danger"
              onClick={handleConfirmDelete}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowDeleteConfirm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`task-card ${isListView ? 'list-view' : 'card-view'} ${
        task.status === 'Completed' ? 'completed' : ''
      }`}
      role="article"
      aria-label={`Task: ${task.title}`}
    >
      <div className="task-header">
        <div className="task-title-section">
          <input
            type="checkbox"
            checked={task.status === 'Completed'}
            onChange={() => onToggleStatus(task.id)}
            className="task-checkbox"
            aria-label={`Mark ${task.title} as ${task.status === 'Completed' ? 'incomplete' : 'complete'}`}
          />
          <div className="task-title-content">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
          </div>
        </div>
        <div className="task-meta">
          <span
            className="priority-badge"
            style={{ backgroundColor: priorityColor }}
            aria-label={`Priority: ${task.priority}`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <div className="task-body">
        <div className="task-due-date" aria-label={`Due date: ${formatDate(task.dueDate)}`}>
          <span className="label">Due:</span>
          <span>{formatDate(task.dueDate)}</span>
        </div>
        <div className="task-status" aria-label={`Status: ${task.status}`}>
          <span className="label">Status:</span>
          <span className={`status-badge ${task.status.toLowerCase()}`}>
            {task.status}
          </span>
        </div>
      </div>

      <div className="task-footer">
        <button
          className="btn btn-secondary"
          onClick={() => onEdit(task)}
          aria-label={`Edit task: ${task.title}`}
          title="Edit this task"
        >
          🖊️ Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDeleteClick}
          aria-label={`Delete task: ${task.title}`}
          title="Delete this task"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};
