import React from "react";
import styled from "styled-components";

const MapSection = styled.section`
  background: #fefcf8;
  padding: 80px 8%;
  text-align: center;
`;

const Title = styled.h2`
  color: #ff5733;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  color: #444;
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 1rem;
  line-height: 1.5;
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 400px;
  margin: 0 auto 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
`;

const ShortLink = styled.p`
  margin-top: 8px;
  font-size: 0.95rem;
  color: #555;

  a {
    color: #ff5733;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MapSectionComponent = () => {
  return (
    <MapSection id="map-admin">
      <Title>Find Gaby Lagos on Google Maps</Title>
      <Subtitle>
        <b> A demo Admin Dashboard</b> is available for the business owner, where you can: 
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto", lineHeight: "1.5" }}>
          <li>Add or edit dishes on the menu</li>
          <li>View analytics such as total page views, most ordered dishes, and successful orders in the last 30 days</li>
          <li>Integrate payments seamlessly via <strong>Paystack</strong> for online orders</li>
        </ul>

      </Subtitle>

      {/* <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1963879782196!2d3.6125682143275545!3d6.434566123476894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4839055b0d9%3A0x8d3c29d8f6e98803!2sGaby%20Lagos!5e0!3m2!1sen!2sng!4v1696300000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gaby Lagos Location"
        ></iframe>
      </MapContainer> */}

      <ShortLink>
        Or open in Google Maps: <a href="https://maps.app.goo.gl/9XLvtEMyZefcTpq27" target="_blank" rel="noopener noreferrer">Click Here</a>
      </ShortLink>
    </MapSection>
  );
};

export default MapSectionComponent;
