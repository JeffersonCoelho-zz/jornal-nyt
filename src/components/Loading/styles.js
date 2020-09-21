import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const top = 50 + rand();
const left = 50 + rand();

export const ContainerLoad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: ${top}%;
  left: ${left}%;
  transform: translate(-${top}%, -${left}%);
  z-index: 999;
`;

export const Loading = styled(CircularProgress).attrs({ color: '' })``;
