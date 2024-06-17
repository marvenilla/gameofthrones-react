import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/authentication/Login'; // Adjust the path as necessary
import useSubmit from '../Api/useSubmit';

jest.mock('../Api/useSubmit');

describe('Login component', () => {
  const mockDispatch = jest.fn();
  
  beforeEach(() => {
    useSubmit.mockReturnValue({
      message: '',
      dispatch: mockDispatch,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Login form', () => {
    render(<Login />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    // expect(screen.getByText(/Not registered yet\? register/i)).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    expect(screen.getByLabelText(/username/i)).toHaveValue('testuser');

    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    expect(screen.getByLabelText(/password/i)).toHaveValue('password123');
  });

  test('handles form submission', () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    expect(mockDispatch).toHaveBeenCalledWith(
      { username: 'testuser', password: 'password123' },
      '/',
      '/auth/login'
    );
  });


});
