export type Priority = 'Low' | 'Medium' | 'High';
export type TaskStatus = 'Completed' | 'Pending';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
}

export interface FilterState {
  search: string;
  status: 'All' | 'Completed' | 'Pending';
  priority: 'All' | Priority;
  viewMode: 'List' | 'Card';
  isDarkMode: boolean;
}
