import styled from 'styled-components';
import HeaderImage from '../../assets/images/header.jpg';
import { COLOR_WHITE } from '../../utils/color';

export const TopContainer = styled.div`
  background: center / contain no-repeat url(${HeaderImage});
  height: 36vw;
  @media (max-width: 500px) {
    height: 44vw;
    background: top / contain no-repeat url(${HeaderImage});
  }
`;

export const ContainerOverLay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  @media (max-width: 500px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 60%;
  @media (max-width: 500px) {
    width: 80%;
    height: 80%;
    margin: 0 auto;
  }
`;

export const Title = styled.p`
  font-size: 60px;
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 800px) {
    font-size: 36px;
  }
  margin: 0;
  text-align: center;
  color: ${COLOR_WHITE};
  font-family: 'Handlee', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
  @media (max-width: 500px) {
    font-size: 26px;
  }
`;

export const SubTitle = styled.p`
  font-size: 34px;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  margin: 0;
  text-align: center;
  color: ${COLOR_WHITE};
  font-family: 'Musin', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
