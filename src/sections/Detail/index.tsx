import React from 'react';
import {
  Heading,
  SubHeading,
  HeadingContainer,
  Container,
  DetailImage,
  DetailContent,
  DetailContentContainer,
  ImageContainer
} from '../../components/style';
import ScheduleImage from '../../assets/images/schedule.png';

const Detail = () => (
  <>
    <HeadingContainer>
      <Heading>Detail</Heading>
      <SubHeading>詳細</SubHeading>
    </HeadingContainer>
    <Container>
      <DetailContentContainer>
        <DetailContent>
          <p>日時： 2020年5月15日or24日(土)</p>
          <p>時間： 未定</p>
          <p>金額： 未定</p>
          <p>
            場所：{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.covo-s1w7.com/">
              街中スペースcovo(予定)
            </a>
          </p>
        </DetailContent>
      </DetailContentContainer>
      <ImageContainer>
        <DetailImage src={ScheduleImage} alt="" />
      </ImageContainer>
    </Container>
  </>
);

export default Detail;
