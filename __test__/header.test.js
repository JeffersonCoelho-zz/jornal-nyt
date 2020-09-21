import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../src/components/Header';

test('header page', () => {
  const { debug } = <Header />;
  debug();
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
