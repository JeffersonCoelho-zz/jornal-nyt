import styled from 'styled-components';
import { Container, Divider } from '@material-ui/core';

const pad1 = 'padding: 1rem;';
const mar1 = 'margin-bottom: 1rem !important;';

export const MyContainer = styled(Container)``;

export const StyleNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

export const MyDivider = styled(Divider)`
  ${mar1}
`;
