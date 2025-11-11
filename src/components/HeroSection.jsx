import React from "react";
import styled, { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)),
    url('/images/hero.jpeg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 2.3rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  animation: ${fadeUp} 1.5s ease forwards;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.5;
  opacity: 0.9;
  animation: ${fadeUp} 2s ease forwards;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  animation: ${fadeUp} 2.5s ease forwards;
`;

const Button = styled.a`
  background: ${({ secondary }) => (secondary ? "transparent" : "#ff5733")};
  border: 2px solid #ff5733;
  color: ${({ secondary }) => (secondary ? "#ff5733" : "#fff")};
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ secondary }) => (secondary ? "#ff5733" : "transparent")};
    color: ${({ secondary }) => (secondary ? "#fff" : "#ff5733")};
    transform: translateY(-3px);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroTitle>
        <Typewriter
          words={[
            'Taste Lagos in Every Bite 🍽️',
            'Authentic Nigerian Flavors 🇳🇬',
            'Where Tradition Meets Taste 🔥',
            'Street Taste, 5-Star Experience 🌶️'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={20}
          deleteSpeed={20}
          delaySpeed={2000}
        />
      </HeroTitle>

      <HeroSubtitle>
        Experience Jollof rice, grilled perfection, and the warm Lagos vibes only at <b>Gaby Lagos</b>.
      </HeroSubtitle>

      <ButtonGroup>
        <Button href="#menu">View Menu</Button>
        <Button href="#booking" secondary>Reserve Table</Button>
      </ButtonGroup>
    </HeroContainer>
  );
};

export default HeroSection;
