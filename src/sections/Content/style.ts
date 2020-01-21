import styled from 'styled-components';

export const DetailContent = styled.div`
  padding-left: 2vw;
  padding-right: 6vw;
  @media (max-width: 500px) {
    padding: unset;
    width: 80%;
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
