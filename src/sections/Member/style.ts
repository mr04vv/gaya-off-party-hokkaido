import styled from 'styled-components';

export const DetailContentContainer = styled.div`
  flex: 1;
  width: 50%;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Musin', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell';
`;

export const DetailContent = styled.div`
  padding-left: 8vw;
  @media (max-width: 500px) {
    padding: unset;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;
