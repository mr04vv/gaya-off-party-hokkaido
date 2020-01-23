import styled from 'styled-components';
import { COLOR_DARK_GRAY } from '../../utils/color';

export const DetailContentContainer = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  @media (max-width: 1024px) {
    font-size: 18px;
    min-width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: unset;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const DetailContent = styled.div`
  padding-left: 8vw;
  text-align: center;
  color: ${COLOR_DARK_GRAY};
  @media (max-width: 500px) {
    padding: unset;
    width: 85%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const SecretaryImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SecretaryImage = styled.img`
  width: 128px;
  border-radius: 68px;
  height: 128px;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 500px) {
    width: 64px;
    height: 64px;
  }
`;

export const DetailImage = styled.img`
  width: 470px;
  @media (max-width: 1024px) {
    width: 370px;
  }
  @media (max-width: 800px) {
    width: 320px;
  }
  @media (max-width: 500px) {
    width: 75%;
  }
`;
