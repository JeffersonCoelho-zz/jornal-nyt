import styled from 'styled-components';
import { Container } from '@material-ui/core';

const pad1 = 'padding: 1rem;';

export const MyContainer = styled(Container)``;

export const StyleNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: black 1px solid;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  > h2 {
    ${pad1}
  }

  > p {
    ${pad1}
    text-align: center;
  }

  :hover {
    background: #d8d8d8;
  }
`;
