import React from 'react';
import './TaskStats.css';

interface TaskStatsProps {
  total: number;
  completed: number;
  pending: number;
}

export const TaskStats: React.FC<TaskStatsProps> = ({
  total,
  completed,
  pending,
}) => {
  const stats = [
    { key: 'total', label: 'Total Tasks', value: total, icon: '📊', className: 'total' },
    { key: 'pending', label: 'Pending', value: pending, icon: '⏳', className: 'pending' },
    { key: 'completed', label: 'Completed', value: completed, icon: '✅', className: 'completed' },
  ];

  return (
    <div className="task-stats">
      {stats.map((stat) => (
        <div key={stat.key} className={`stat-card ${stat.className}`}>
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-content">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
