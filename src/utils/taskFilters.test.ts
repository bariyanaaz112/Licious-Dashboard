import { filterTasks, getTaskStats, formatDate, getPriorityColor } from './taskFilters';
import type { Task } from '../types/Task';

describe('Task Filters Utils', () => {
  const mockTasks: Task[] = [
    {
      id: '1',
      title: 'High Priority Task',
      description: 'Important task',
      priority: 'High',
      dueDate: '2024-12-31',
      status: 'Pending',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
    {
      id: '2',
      title: 'Complete Task',
      description: 'Already completed',
      priority: 'Low',
      dueDate: '2024-12-25',
      status: 'Completed',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
    {
      id: '3',
      title: 'Medium Priority',
      description: 'Regular task',
      priority: 'Medium',
      dueDate: '2024-12-20',
      status: 'Pending',
      createdAt: '2024-01-01T10:00:00Z',
      updatedAt: '2024-01-01T10:00:00Z',
    },
  ];

  test('filters tasks by search term', () => {
    const filtered = filterTasks(mockTasks, 'High', 'All', 'All');
    expect(filtered.length).toBe(1);
    expect(filtered[0].title).toBe('High Priority Task');
  });

  test('filters tasks by status', () => {
    const filtered = filterTasks(mockTasks, '', 'Completed', 'All');
    expect(filtered.length).toBe(1);
    expect(filtered[0].status).toBe('Completed');
  });

  test('filters tasks by priority', () => {
    const filtered = filterTasks(mockTasks, '', 'All', 'High');
    expect(filtered.length).toBe(1);
    expect(filtered[0].priority).toBe('High');
  });

  test('combines multiple filters', () => {
    const filtered = filterTasks(mockTasks, 'task', 'Pending', 'Medium');
    expect(filtered.length).toBe(1);
    expect(filtered[0].title).toBe('Medium Priority');
  });

  test('calculates task statistics correctly', () => {
    const stats = getTaskStats(mockTasks);
    expect(stats.total).toBe(3);
    expect(stats.completed).toBe(1);
    expect(stats.pending).toBe(2);
  });

  test('formats date correctly', () => {
    const date = '2024-12-31T10:00:00Z';
    const formatted = formatDate(date);
    expect(formatted).toMatch(/Dec/);
    expect(formatted).toMatch(/31/);
  });

  test('gets correct priority colors', () => {
    expect(getPriorityColor('High')).toBe('#ef4444');
    expect(getPriorityColor('Medium')).toBe('#f59e0b');
    expect(getPriorityColor('Low')).toBe('#10b981');
  });
});
