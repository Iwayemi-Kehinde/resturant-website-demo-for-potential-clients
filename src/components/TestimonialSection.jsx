import React from "react";
import styled, { keyframes } from "styled-components";
import { FaStar } from "react-icons/fa";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
`;

const TestimonialSection = styled.section`
  background: #fffaf7;
  padding: 80px 8%;
  text-align: center;
`;

const Title = styled.h2`
  color: #ff5733;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #444;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto 50px;
  opacity: 0.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  animation: ${fadeUp} 1.5s ease forwards;
`;

const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover { transform: translateY(-5px); }
`;

const CustomerName = styled.h3`
  font-size: 1.1rem;
  color: #222;
  margin: 10px 0 5px 0;
  font-weight: 700;
`;

const Review = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Stars = styled.div`
  color: #ffbd33;
  margin-bottom: 10px;
`;

const Testimonials = () => {
  const reviews = [
    { name: "Chika O.", review: "The Jollof rice is unmatched! ❤️", rating: 5 },
    { name: "Amaka L.", review: "Amazing taste and vibes, will come back again!", rating: 5 },
    { name: "Tunde A.", review: "Fried Plantain & Beans = 🔥🔥", rating: 4 },
    { name: "Nneka B.", review: "Cozy place and delicious food. Highly recommend!", rating: 5 },
  ];

  return (
    <TestimonialSection id="reviews">
      <Title>What Our Customers Say</Title>
      <Subtitle>Real feedback from our happy customers — they love it, and so will you.</Subtitle>
      <Grid>
        {reviews.map((r, i) => (
          <Card key={i}>
            <Stars>{Array(r.rating).fill(<FaStar />)}</Stars>
            <CustomerName>{r.name}</CustomerName>
            <Review>"{r.review}"</Review>
          </Card>
        ))}
      </Grid>
    </TestimonialSection>
  );
};

export default Testimonials;
