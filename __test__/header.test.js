import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../src/components/Header';

test('header component', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
