import React, { useState } from 'react';
import { Form, FormButton, Input, InputLabel } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputLabel>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Enter contact name"
          minLength={3}
        />
      </InputLabel>
      <InputLabel>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          minLength={9}
          maxLength={13}
          placeholder="Enter phone number"
        />
      </InputLabel>
      <FormButton>Add contact</FormButton>
    </Form>
  );
};
