import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home tile', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vanessa GENY/i);
  expect(linkElement).toBeInTheDocument();
});
