import React, { createContext, useCallback, useMemo } from 'react';
import type { Task, TaskContextType } from '../types/Task';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = useCallback((taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  }, [tasks, setTasks]);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }, [tasks, setTasks]);

  const deleteTask = useCallback((id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }, [tasks, setTasks]);

  const toggleTaskStatus = useCallback((id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'Completed' ? 'Pending' : 'Completed',
              updatedAt: new Date().toISOString(),
            }
          : task
      )
    );
  }, [tasks, setTasks]);

  const value = useMemo(
    () => ({ tasks, addTask, updateTask, deleteTask, toggleTaskStatus }),
    [tasks, addTask, updateTask, deleteTask, toggleTaskStatus]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
