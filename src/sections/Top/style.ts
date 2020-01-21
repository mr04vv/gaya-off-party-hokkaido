import styled from 'styled-components';
import CatImage from '../../assets/images/cat.jpg';
import { COLOR_WHITE } from '../../utils/color';

export const TopContainer = styled.div`
  background: center / cover no-repeat url(${CatImage});
  height: 400px;
  @media (max-width: 500px) {
    height: 320px;
  }
`;

export const ContainerOverLay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 48px;
  text-align: center;
  color: ${COLOR_WHITE};
  font-family: 'Handlee', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
  @media (max-width: 500px) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  margin: 0;
  text-align: center;
  color: ${COLOR_WHITE};
  font-family: 'Musin', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
