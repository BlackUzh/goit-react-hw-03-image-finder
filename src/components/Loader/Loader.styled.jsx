import styled from '@emotion/styled';
import { Dna } from 'react-loader-spinner';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  margin: 0 auto;
`;

export const LoaderStyled = styled(Dna)`
  margin: 0 auto;
`;
