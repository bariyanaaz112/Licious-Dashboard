import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import './styles/variables.css';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskFilter } from './components/TaskFilter';
import { TaskList } from './components/TaskList';
import { TaskStats } from './components/TaskStats';
import { useTasks } from './hooks/useTasks';
import { useLocalStorage } from './hooks/useLocalStorage';
import { filterTasks, getTaskStats } from './utils/taskFilters';
import type { Task, Priority, TaskStatus } from './types/Task';

function App() {
  const { tasks, addTask, updateTask, deleteTask, toggleTaskStatus } =
    useTasks();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | TaskStatus>('All');
  const [priorityFilter, setPriorityFilter] = useState<'All' | Priority>(
    'All'
  );
  const [isCardView, setIsCardView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const isEditing = Boolean(editingTask);
  const initialFormData = editingTask ?? undefined;

  const openAddModal = () => {
    setEditingTask(null);
    setShowTaskModal(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
    setEditingTask(null);
  };

  // Filter tasks
  const filteredTasks = useMemo(
    () => filterTasks(tasks, search, statusFilter, priorityFilter),
    [tasks, search, statusFilter, priorityFilter]
  );

  // Get stats
  const stats = useMemo(() => getTaskStats(tasks), [tasks]);

  // Handle form submission
  const handleFormSubmit = (data: {
    title: string;
    description: string;
    priority: Priority;
    dueDate: string;
  }) => {
    if (editingTask) {
      updateTask(editingTask.id, {
        ...data,
        status: editingTask.status,
      });
      setEditingTask(null);
    } else {
      addTask({
        ...data,
        status: 'Pending',
      });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  // Apply dark mode on load
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} />

      <main className="app-container">
        <div className="app-content">
          <div className="page-actions">
            <button
              type="button"
              className="btn btn-primary add-task-button"
              onClick={openAddModal}
            >
              ➕ Add Task
            </button>
          </div>

          <section className="stats-section">
            <h2>Task Overview</h2>
            <TaskStats
              total={stats.total}
              completed={stats.completed}
              pending={stats.pending}
            />
          </section>

          <section className="filter-section">
            <h2>Filter & View</h2>
            <TaskFilter
              search={search}
              onSearchChange={setSearch}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              priorityFilter={priorityFilter}
              onPriorityChange={setPriorityFilter}
              isCardView={isCardView}
              onViewModeChange={() => setIsCardView(!isCardView)}
            />
          </section>

          <section className="tasks-section">
            <h2>
              Tasks ({filteredTasks.length} of {tasks.length})
            </h2>
            <TaskList
              tasks={filteredTasks}
              onToggleStatus={toggleTaskStatus}
              onEdit={openEditModal}
              onDelete={deleteTask}
              isCardView={isCardView}
            />
          </section>

          {showTaskModal && (
            <div className="modal-overlay" role="dialog" aria-modal="true">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{isEditing ? 'Edit Task' : 'Create New Task'}</h2>
                  <button
                    type="button"
                    className="modal-close"
                    onClick={closeTaskModal}
                    aria-label="Close task modal"
                  >
                    ×
                  </button>
                </div>
                <TaskForm
                  onSubmit={(data) => {
                    handleFormSubmit(data);
                    closeTaskModal();
                  }}
                  initialData={initialFormData}
                  isEditing={isEditing}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>
          © 2026 Task Management Dashboard. Built with React & TypeScript.
        </p>
      </footer>
    </div>
  );
}

export default App;