import React from 'react';
import { Heading, SubHeading, HeadingContainer, Container, DetailImage, ImageContainer } from '../../components/style';
import MemberImage from '../../assets/images/member.png';
import Secretary from '../../assets/images/kanji.jpg';
import { DetailContent, SecretaryImage, SecretaryImageWrapper, DetailContentContainer } from './style';

const Member = () => (
  <>
    <HeadingContainer>
      <Heading>Member</Heading>
      <SubHeading>メンバー</SubHeading>
    </HeadingContainer>
    <Container>
      <DetailContentContainer>
        <DetailContent>
          <p>参加メンバー募集中！！</p>
          <p>参加希望の方は幹事↓↓まで！！</p>
          <SecretaryImageWrapper>
            <a href="https://twitter.com/Slipperfriend" target="_blank" rel="noopener noreferrer">
              <SecretaryImage src={Secretary} alt="" />
            </a>
          </SecretaryImageWrapper>
        </DetailContent>
      </DetailContentContainer>
      <ImageContainer>
        <DetailImage src={MemberImage} alt="" />
      </ImageContainer>
    </Container>
  </>
);

export default Member;
