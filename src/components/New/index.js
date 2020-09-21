import React from 'react';
import { MyContainer, StyleNew } from './styles';

export const New = ({ value, onclick }) => {
  return (
    <MyContainer>
      <StyleNew onClick={onclick}>
        <h2>{value?.title}</h2>
        <p>{value?.abstract}</p>
      </StyleNew>
    </MyContainer>
  );
};
