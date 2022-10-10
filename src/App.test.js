import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as data from './api/GET';
import App from './App';
import UserPage from './components/UserPage';

const dataArray = data.data

test('Main page loads', () => {
  render(<App />)
  const title = screen.getByText(/Reward Points Viewer/i);
  expect(title).toBeInTheDocument();
});

test('User page loads info', () => {
  render(<App />)
  const names = screen.getAllByTestId('name-link')
  expect(names).toBeTruthy()
  expect(names).toHaveLength(dataArray.length)
});
