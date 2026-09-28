import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import App from './App';

it('shows Cristian David Lozano as the professional portfolio owner', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /cristian david lozano/i })).toBeInTheDocument();
});
