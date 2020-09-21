import React from 'react';
import { SimpleModal } from '../Modal';

export const MyList = ({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SimpleModal key={index} value={value} />
      ))}
    </ul>
  );
};
