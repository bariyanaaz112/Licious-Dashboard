import React from 'react';
import './Header.css';

interface HeaderProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onDarkModeToggle,
}) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-title">
          <h1>📋 Task Management Dashboard</h1>
          <p>Organize, track, and manage your tasks efficiently</p>
        </div>
        <div className="header-actions">
          <button
            className="btn-theme-toggle"
            onClick={onDarkModeToggle}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};
