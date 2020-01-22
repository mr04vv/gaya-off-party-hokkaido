import React from 'react';
import {
  Heading,
  SubHeading,
  HeadingContainer,
  Container,
  DetailImage,
  DetailContent,
  DetailContentContainer,
  ImageContainer,
  ContentTitle,
  ContentText
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
          <ContentTitle>日程</ContentTitle>
          <ContentText>2020年5月15日or24日(土)</ContentText>
          <ContentTitle>時間</ContentTitle>
          <ContentText>調整中</ContentText>
          <ContentTitle>参加費</ContentTitle>
          <ContentText>
            場所代12000〜13000円＋持ち込み料3000円＋その他器具レンタル料などを割り勘します。
            交通費(飛行機、電車、高速)がかかる方も多いと思うので参加費は個々で前後する予定です！
          </ContentText>
          <ContentTitle>場所</ContentTitle>
          <ContentText>
            <a target="_blank" rel="noopener noreferrer" href="https://www.covo-s1w7.com/">
              街中スペースcovo(予定)
            </a>
          </ContentText>
        </DetailContent>
      </DetailContentContainer>
      <ImageContainer>
        <DetailImage src={ScheduleImage} alt="" />
      </ImageContainer>
    </Container>
  </>
);

export default Detail;
