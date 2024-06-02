import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from '../components/welcome/Welcome';

describe('Welcome component', () => {
  test('renders correctly when visible', () => {
    render(<Welcome />);
    
    expect(screen.getByText('Welcome back, John Doe')).toBeInTheDocument();
    expect(screen.getByText(/The end of the year is coming./)).toBeInTheDocument();
    expect(screen.getByText('Look here for more information')).toBeInTheDocument();
    
    expect(screen.getByAltText('Vector')).toBeInTheDocument();
    
    expect(screen.getByAltText('Close')).toBeInTheDocument();
  });

  test('hides welcome message when close button is clicked', () => {
    render(<Welcome />);
    
    expect(screen.getByText('Welcome back, John Doe')).toBeInTheDocument();

    const closeButton = screen.getByAltText('Close');
    fireEvent.click(closeButton);
    
    expect(screen.queryByText('Welcome back, John Doe')).not.toBeInTheDocument();
  });
});
