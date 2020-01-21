import styled from 'styled-components';
import { COLOR_DARK_GRAY } from '../utils/color';

export const HeadingContainer = styled.div``;

export const Heading = styled.p`
  font-size: 38px;
  text-align: center;
  color: ${COLOR_DARK_GRAY};
  margin-bottom: 0;
  font-family: 'Handlee', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
`;

export const SubHeading = styled.p`
  font-size: 18px;
  margin: 0;
  text-align: center;
  color: ${COLOR_DARK_GRAY};
  font-family: 'Musin', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 500px) {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;

export const DetailContentContainer = styled.div`
  flex: 1;
  width: 50%;
  font-size: 32px;
  display: flex;
  min-width: 560px;
  align-items: center;
  font-family: 'Musin', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
  @media (max-width: 1024px) {
    font-size: 24px;
    min-width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    min-width: unset;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const DetailContent = styled.div`
  padding-left: 8vw;
  @media (max-width: 500px) {
    padding: unset;
    width: 80%;
    margin: 0 auto;
  }
`;

export const ContentTitle = styled.p`
  font-weight: bold;
  border-bottom: solid 2px;
  display: inline;
`;

export const ContentText = styled.p`
  padding-left: 14px;
`;

export const DetailImage = styled.img`
  width: 100%;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const AllRightReserved = styled.p`
  color: #666;
  font-size: 12px;
  text-align: center;
  margin-bottom: 40px;
`;
