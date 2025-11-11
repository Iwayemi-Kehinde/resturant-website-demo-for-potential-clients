import React, { useState } from "react";
import styled from "styled-components";

const ModalSection = ({ show, onClose, dish }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    quantity: 1,
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `Hello Gaby Lagos! 🍽️ I’d like to order ${form.quantity} plate(s) of ${dish}. 
    Name: ${form.name}, Phone: ${form.phone}. 
    Note: ${form.note}.`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/2349169163705?text=${encodedMsg}`, "_blank");

    setTimeout(() => {
      alert("✅ Thanks for your patronage!");
      onClose();
    }, 1000);
  };

  if (!show) return null;

  return (
    <ModalOverlay>
      <ModalBox>
        <h2>Order {dish}</h2>
        <Input name="name" placeholder="Your Name" onChange={handleChange} />
        <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <Input
          name="quantity"
          type="number"
          min="1"
          placeholder="Quantity"
          onChange={handleChange}
        />
        <Textarea
          name="note"
          placeholder="Special Note (optional)"
          onChange={handleChange}
        />
        <Submit onClick={handleSubmit}>Submit Order</Submit>
        <Cancel onClick={onClose}>Cancel</Cancel>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ModalSection;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Submit = styled.button`
  background: #ff7b00;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover { background: #ff9933; }
`;

const Cancel = styled.button`
  background: transparent;
  border: none;
  color: gray;
  margin-top: 10px;
  cursor: pointer;
`;
