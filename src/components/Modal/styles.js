import styled from 'styled-components';
import { Paper } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const top = 50 + rand();
const left = 50 + rand();

export const StyleModal = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: ${top}%;
  left: ${left}%;
  transform: translate(-${top}%, -${left}%);

  > h2 {
    padding: 1rem;
  }
  > img {
    padding: 1rem;
  }
  > p {
    padding: 1rem;
  }
`;
