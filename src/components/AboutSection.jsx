import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLeaf, FaFire, FaHeart } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.section`
  width: 100%;
  padding: 100px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fffefc;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  animation: ${fadeIn} 1.2s ease forwards;
`;

const Title = styled.h2`
  color: #ff5733;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  color: #333;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 40px;
  max-width: 500px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 25px;
  justify-content: start;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const IconBox = styled.div`
  background: #fff5f2;
  border-radius: 20px;
  padding: 20px 25px;
  text-align: center;
  color: #ff5733;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: #ff5733;
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1.5s ease forwards;

  img {
    width: 85%;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    margin-top: 40px;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <TextContainer>
        <Title>About Gaby Lagos</Title>
        <Subtitle>
          At <strong>Gaby Lagos</strong>, every meal tells a story of flavor,
          passion, and tradition. From smoky Jollof rice to grilled perfection,
          we bring you the heart of Lagos in every plate. served with love and
          crafted with pride. Whether you’re dining in or taking away, our goal
          is simple: make every bite unforgettable.
        </Subtitle>

        <IconRow>
          <IconBox>
            <FaLeaf size={25} />
            Fresh Ingredients
          </IconBox>
          <IconBox>
            <FaFire size={25} />
            Original Recipes
          </IconBox>
          <IconBox>
            <FaHeart size={25} />
            Lagos Vibes
          </IconBox>
        </IconRow>
      </TextContainer>

      <ImageContainer>
        <img src="/images/about-foodd.jpeg" alt="About Gaby Lagos" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default AboutSection;
