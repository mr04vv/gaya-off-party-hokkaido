import React from 'react';
import {
  Heading,
  SubHeading,
  HeadingContainer,
  Container,
  DetailImage,
  DetailContentContainer,
  ImageContainer
} from '../../components/style';
import MemberImage from '../../assets/images/member.png';
import { DetailContent } from './style';

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
          <p>参加希望の方はXXXのDMまで！！</p>
        </DetailContent>
      </DetailContentContainer>
      <ImageContainer>
        <DetailImage src={MemberImage} alt="" />
      </ImageContainer>
    </Container>
  </>
);

export default Member;
