import React, { useState } from "react";
import styled from "styled-components";

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `Hello Gaby Lagos! 🍽️ I'd like to reserve a table.
    Name: ${form.name}
    Date: ${form.date}
    Time: ${form.time}
    Guests: ${form.guests}
    Phone: ${form.phone}`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/2349169163705?text=${encodedMsg}`, "_blank");
    alert("✅ Reservation request sent successfully!");
  };

  return (
    <Section id="booking">
      <Content>
        <h2>Reserve a Table</h2>
        <p>Your table is waiting — book in seconds!</p>
        <Form>
          <Input name="name" placeholder="Full Name" onChange={handleChange} />
          <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <Input name="date" type="date" onChange={handleChange} />
          <Input name="time" type="time" onChange={handleChange} />
          <Input
            name="guests"
            type="number"
            min="1"
            placeholder="No. of Guests"
            onChange={handleChange}
          />
          <Submit onClick={handleSubmit}>Reserve Now</Submit>
        </Form>
        <ContactInfo>
          <span>📍 Lekki Phase 1, Lagos</span>
          <span>📞 +234 916 916 3705</span>
        </ContactInfo>
      </Content>
    </Section>
  );
};

export default ReservationSection;

const Section = styled.section`
  background: #111;
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 500px;
  margin: auto;
  h2 {
    font-size: 2rem;
    color: #ffbd33;
  }
  p {
    color: #ddd;
    margin-bottom: 20px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
`;

const Submit = styled.button`
  background: #ffbd33;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #ffc75f;
  }
`;

const ContactInfo = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #aaa;
  font-size: 0.9rem;
`;
