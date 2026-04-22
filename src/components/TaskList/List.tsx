import React from 'react';
import './List.css';
import type { Task } from '../../types/Task';
import { TaskCard } from '../TaskCard';

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  isCardView: boolean;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleStatus,
  onEdit,
  onDelete,
  isCardView,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📋</div>
        <h3>No tasks found</h3>
        <p>Try adjusting your filters or create a new task to get started.</p>
      </div>
    );
  }

  return (
    <div className={`task-list ${isCardView ? 'card-view-grid' : 'list-view'}`}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onEdit={onEdit}
          onDelete={onDelete}
          isListView={!isCardView}
        />
      ))}
    </div>
  );
};
