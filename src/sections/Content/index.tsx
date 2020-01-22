import React from 'react';
import {
  Heading,
  SubHeading,
  HeadingContainer,
  DetailImage,
  DetailContentContainer,
  ImageContainer
} from '../../components/style';
import ContentImage from '../../assets/images/party.png';
import { DetailContent, Container } from './style';

const Content = () => (
  <>
    <HeadingContainer>
      <Heading>Content</Heading>
      <SubHeading>コンテンツ</SubHeading>
    </HeadingContainer>
    <Container>
      <ImageContainer>
        <DetailImage src={ContentImage} alt="" />
      </ImageContainer>
      <DetailContentContainer>
        <DetailContent>
          <p>調整中...</p>
          <p>何か楽しいことを思いついた人はどこでもいいので言ってください！（お待ちしてます✨）</p>
        </DetailContent>
      </DetailContentContainer>
    </Container>
  </>
);

export default Content;
