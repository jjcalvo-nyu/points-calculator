import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as data from './api/GET';
import App from './App';

const dataArray = data.data

beforeEach(() => {
  jest.clearAllMocks()
})

test('Main page loads', () => {
  render(<App />)
  const title = screen.getByText(/Reward Points Viewer/i);
  expect(title).toBeInTheDocument();
});

test('User page loads info', () => {
  render(<App />)
  userEvent.click(screen.queryAllByTestId('name-link')[0])
  const name = screen.getByTestId('name-header')
  const transaction = screen.getAllByTestId('transaction')
  expect(name).toBeTruthy()
  expect(transaction).toBeTruthy()
});