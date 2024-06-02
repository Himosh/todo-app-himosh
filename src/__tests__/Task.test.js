import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '../components/task/Task';
import { DataContext } from '../dataContext';
import { act } from 'react-dom/test-utils';

const mockData = [
  { id: 1, todo: 'Task 1', priority: 'HIGH', completed: false, createdAt: '2023-01-01' },
  { id: 2, todo: 'Task 2', priority: 'MEDIUM', completed: false, createdAt: '2023-01-02' },
  { id: 3, todo: 'Task 3', priority: 'LOW', completed: true, createdAt: '2023-01-03' },
  { id: 4, todo: 'Task 4', priority: 'HIGH', completed: false, createdAt: '2023-01-04' }, 
];

const renderWithDataContext = (data, loading = false, error = null) => {
  return render(
    <DataContext.Provider value={{ data, loading, error }}>
      <Task />
    </DataContext.Provider>
  );
};

describe('Task component', () => {
  test('displays loading message when data is being fetched', () => {
    renderWithDataContext([], true, null);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error message when there is an error fetching data', () => {
    const errorMessage = 'Error: Failed to fetch data';
    renderWithDataContext([], false, { message: 'Failed to fetch data' });
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('renders tasks correctly', () => {
    renderWithDataContext(mockData);

    mockData.slice(0, 8).forEach(task => {
      expect(screen.getByText(task.todo)).toBeInTheDocument();
      expect(screen.getByText(task.completed ? 'Done' : 'In-Progress')).toBeInTheDocument();
      expect(screen.getByText(new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))).toBeInTheDocument();
    });
  });

  test('marks task as done', () => {
    renderWithDataContext(mockData);

    const markAsDoneButton = screen.getAllByText('Mark as done')[0];
    fireEvent.click(markAsDoneButton);

    expect(screen.getAllByText('Done').length).toBe(2);
  });

  test('handles pagination', () => {
    renderWithDataContext(mockData);

    const nextPageButton = screen.getByRole('button', { name: /2/i });
    fireEvent.click(nextPageButton);

    mockData.slice(8, 16).forEach(task => {
      expect(screen.getByText(task.todo)).toBeInTheDocument();
    });
  });
});
