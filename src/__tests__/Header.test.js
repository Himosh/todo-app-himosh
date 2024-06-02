import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header/Header';

describe('Header component', () => {
  test('renders correctly', () => {
    render(<Header />);
    
    const headerContainer = screen.getByRole('banner');
    expect(headerContainer).toBeInTheDocument();
  });

  test('renders the Dashboard title', () => {
    render(<Header />);
    
    const dashboardTitle = screen.getByText('Dashboard');
    expect(dashboardTitle).toBeInTheDocument();
  });

  test('renders the Notification, Profile, and Chevrondown icons', () => {
    render(<Header />);
    
    const notificationIcon = screen.getAllByAltText('dashboard')[0];
    expect(notificationIcon).toBeInTheDocument();
    
    const profileIcon = screen.getAllByAltText('dashboard')[1];
    expect(profileIcon).toBeInTheDocument();

    const chevrondownIcon = screen.getAllByAltText('dashboard')[2];
    expect(chevrondownIcon).toBeInTheDocument();
  });
});
