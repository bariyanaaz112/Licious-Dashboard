import React from 'react';
import './Filter.css';
import type { Priority, TaskStatus } from '../../types/Task';

interface FilterControlProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: 'All' | TaskStatus;
  onStatusChange: (value: 'All' | TaskStatus) => void;
  priorityFilter: 'All' | Priority;
  onPriorityChange: (value: 'All' | Priority) => void;
  isCardView: boolean;
  onViewModeChange: () => void;
}

export const TaskFilter: React.FC<FilterControlProps> = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
  isCardView,
  onViewModeChange,
}) => {
  // Status filtering options
  const statusOptions = [
    { value: 'All', label: 'All' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Completed', label: 'Done' },
  ] as const;

  // Priority levels
  const priorityOptions: Array<{ value: 'All' | Priority; label: string }> = [
    { value: 'All', label: 'All Priorities' },
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
  ];

  return (
    <div className="task-filter">
      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search tasks by title or description..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="status-filter">Status</label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) =>
              onStatusChange(e.target.value as 'All' | 'Completed' | 'Pending')
            }
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priority-filter">Priority</label>
          <select
            id="priority-filter"
            value={priorityFilter}
            onChange={(e) =>
              onPriorityChange(e.target.value as 'All' | Priority)
            }
          >
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          className={`btn btn-view-toggle ${isCardView ? 'card-active' : 'list-active'}`}
          onClick={onViewModeChange}
          title={`Switch to ${isCardView ? 'list' : 'card'} view`}
          aria-label={`View mode: currently showing ${isCardView ? 'cards' : 'list'}`}
        >
          {isCardView ? '📋 List View' : '🃏 Card View'}
        </button>
      </div>
    </div>
  );
};
