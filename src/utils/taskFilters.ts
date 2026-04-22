import type { Task, Priority, TaskStatus } from '../types/Task';

export function filterTasks(
  tasks: Task[],
  search: string,
  status: 'All' | 'Completed' | 'Pending',
  priority: 'All' | Priority
): Task[] {
  return tasks.filter((task) => {
    const matchesSearch =
      search === '' ||
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === 'All' ||
      (status === 'Completed' && task.status === 'Completed') ||
      (status === 'Pending' && task.status === 'Pending');

    const matchesPriority =
      priority === 'All' || task.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });
}

export function getTaskStats(tasks: Task[]) {
  return {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'Completed').length,
    pending: tasks.filter((t) => t.status === 'Pending').length,
  };
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getPriorityColor(priority: Priority): string {
  switch (priority) {
    case 'High':
      return '#ef4444';
    case 'Medium':
      return '#f59e0b';
    case 'Low':
      return '#10b981';
    default:
      return '#6b7280';
  }
}
