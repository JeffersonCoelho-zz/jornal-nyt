import styled from 'styled-components';
import logoNyt from '../../assets/nyt.png';

export const HContanier = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: logoNyt,
})`
  width: auto;
  height: 5rem;
`;
