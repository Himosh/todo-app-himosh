import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/sidebar/Sidebar';

describe('Sidebar component', () => {
  test('renders correctly', () => {
    render(<Sidebar />);
  
    const menuIcon = screen.getByAltText('Menu');
    expect(menuIcon).toBeInTheDocument();
    
    const sidebarContainer = screen.getByRole('complementary');
    expect(sidebarContainer).not.toHaveClass('visible');
  });

  test('toggles sidebar visibility when menu icon is clicked', () => {
    render(<Sidebar />);
    
    const menuIcon = screen.getByAltText('Menu');
    fireEvent.click(menuIcon);

    const sidebarContainer = screen.getByRole('complementary');
    expect(sidebarContainer).toHaveClass('visible');

    const closeIcon = screen.getByAltText('Close');
    expect(closeIcon).toBeInTheDocument();
  });

  test('toggles sidebar visibility when close icon is clicked', () => {
    render(<Sidebar />);
    
    const menuIcon = screen.getByAltText('Menu');
    fireEvent.click(menuIcon);
    
    const closeIcon = screen.getByAltText('Close');
    fireEvent.click(closeIcon);
    
    const sidebarContainer = screen.getByRole('complementary');
    expect(sidebarContainer).not.toHaveClass('visible');
  });

  test('renders sidebar list items correctly', () => {
    render(<Sidebar />);
    
    const menuIcon = screen.getByAltText('Menu');
    fireEvent.click(menuIcon);

    const dashboardItem = screen.getByText('Dashboard');
    expect(dashboardItem).toBeInTheDocument();
  });
});
