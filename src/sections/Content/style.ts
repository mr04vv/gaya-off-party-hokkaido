import styled from 'styled-components';
import { COLOR_DARK_GRAY } from '../../utils/color';

export const DetailContent = styled.div`
  padding-left: 2vw;
  padding-right: 6vw;
  color: ${COLOR_DARK_GRAY};
  @media (max-width: 500px) {
    padding: unset;
    width: 85%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
