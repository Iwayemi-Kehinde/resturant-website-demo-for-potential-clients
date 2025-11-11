import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #111;
  color: #fff;
  padding: 60px 8% 30px 8%;
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;
`;

const Logo = styled.h2`
  color: #ff5733;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Info = styled.p`
  color: #aaa;
  margin: 8px 0;
  font-size: 0.95rem;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  justify-content: center;
  a {
    color: #fff;
    font-size: 1.2rem;
    transition: 0.3s;
    &:hover {
      color: #ff5733;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  border-top: 1px solid #222;
  padding-top: 15px;
  color: #777;
  font-size: 0.85rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <Logo>Gaby Lagos</Logo>
          <Info>📍 Lekki Phase 1, Lagos, Nigeria</Info>
          <Info>📞 +234 916 916 3705</Info>
          <Info>✉️ contact@gabylagos.com</Info>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://wa.me/2349169163705"><FaWhatsapp /></a>
          </SocialIcons>
        </Column>

        <Column>
          <h3>Quick Links</h3>
          <Info>Home</Info>
          <Info>Menu</Info>
          <Info>About</Info>
          <Info>Booking</Info>
          <Info>Testimonials</Info>
        </Column>

        <Column>
          <h3>Opening Hours</h3>
          <Info>Mon – Fri: 10:00 AM – 10:00 PM</Info>
          <Info>Sat – Sun: 11:00 AM – 11:00 PM</Info>
        </Column>
      </FooterGrid>

      <FooterBottom>
        © {new Date().getFullYear()} Gaby Lagos. All Rights Reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
