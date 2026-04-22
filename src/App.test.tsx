import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { TaskProvider } from './contexts/TaskContext';

const renderWithProvider = (component: React.ReactElement) => {
  return render(<TaskProvider>{component}</TaskProvider>);
};

describe('App Component', () => {
  it('renders header with title',async () => {
    renderWithProvider(<App />);
    const header =  screen.getAllByText(/Task Management Dashboard/i);
   expect(header.length).toBeGreaterThan(0);
  });

  it('renders task stats', () => {
    renderWithProvider(<App />);
    const statsHeading = screen.getByText(/Task Overview/i);
    expect(statsHeading).toBeInTheDocument();
  });

  it('toggles dark mode', () => {
    renderWithProvider(<App />);

    const themeButton = screen.getByLabelText(/Toggle dark mode/i);
    expect(themeButton).toBeInTheDocument();

    fireEvent.click(themeButton);
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });
});
