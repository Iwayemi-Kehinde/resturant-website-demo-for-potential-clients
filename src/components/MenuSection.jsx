import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import ModalSection from "./ModalSection";


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MenuContainer = styled.section`
  background: #fffaf7;
  padding: 100px 8%;
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  animation: ${fadeIn} 1.5s ease forwards;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 25px rgba(0,0,0,0.1);
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 20px;
`;

const FoodName = styled.h3`
  font-size: 1.3rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 12px;
`;

const Price = styled.span`
  color: #ff5733;
  font-weight: 700;
  font-size: 1.1rem;
`;

const OrderBtn = styled.a`
  display: inline-block;
  background: #ff5733;
  color: #fff;
  padding: 10px 18px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: #ff5733;
    border: 2px solid #ff5733;
  }
`;

const MenuSection = () => {
    const [selectedDish, setSelectedDish] = useState(null);

  const dishes = [
    {
      name: "Smoky Jollof Rice",
      desc: "Classic Nigerian Jollof with grilled chicken.",
      price: "€12.50",
      image: "/images/jollof.jpeg",
    },
    {
      name: "Fried Plantain & Beans",
      desc: "Sweet fried plantain served with spiced beans.",
      price: "€9.00",
      image: "/images/plantain.jpeg",
    },
    {
      name: "Grilled Catfish",
      desc: "Pepper-seasoned grilled catfish with sides.",
      price: "€14.00",
      image: "/images/catfish.jpeg",
    },
    {
      name: "Efo Riro",
      desc: "Yoruba-style spinach stew with assorted meat.",
      price: "€11.00",
      image: "/images/efo-riro.jpeg",
    },
    {
      name: "Pounded Yam & Egusi",
      desc: "Rich melon soup with soft pounded yam.",
      price: "€13.00",
      image: "/images/egusi.jpeg",
    },
    {
      name: "Suya Special",
      desc: "Tender beef skewers with spicy suya pepper.",
      price: "€10.50",
      image: "/images/suya.jpeg",
    },
  ];

  return (
    <MenuContainer id="menu">
      <Title>Our Signature Dishes</Title>
      <Subtitle>Delight your taste buds with our handpicked favorites. cooked with heart, served with love.</Subtitle>

      <Grid>
        {dishes.map((dish, index) => (
          <Card key={index}>
            <Img src={dish.image} alt={dish.name} />
            <Info>
              <FoodName>{dish.name}</FoodName>
              <Desc>{dish.desc}</Desc>
              <Price>{dish.price}</Price> <br />
              <OrderBtn onClick={() => setSelectedDish(dish.name)}>Order Now</OrderBtn>

            </Info>
          </Card>
        ))}
      </Grid>
      <ModalSection
  show={!!selectedDish}
  dish={selectedDish}
  onClose={() => setSelectedDish(null)}
/>

    </MenuContainer>
  );
};

export default MenuSection;
