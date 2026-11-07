// Regression tests for React 18 to 19 upgrade.
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('fitness app rendering', () => {
  it('renders the home page and membership plans', () => {
    render(<App />);

    expect(screen.getByText('The best fitness club in town!')).toBeTruthy();
    expect(screen.getByText('BASIC PLAN')).toBeTruthy();
    expect(screen.getByText('PREMIUM PLAN')).toBeTruthy();
  });
});
