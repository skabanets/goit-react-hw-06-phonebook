import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookWrapper, Subtitle, Title } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const Phonebook = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (findContact(name)) return;

    setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  };

  const findContact = name => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
    }

    return isExist;
  };

  const deleteContact = id => {
    setContacts(prev => [...prev.filter(contact => contact.id !== id)]);
  };

  const filterChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const resetFilter = () => {
    setFilter('');
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <PhonebookWrapper>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />

      <Subtitle>Contacts ({contacts.length})</Subtitle>
      <Filter value={filter} onChange={filterChange} onClick={resetFilter} />
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <Contacts contacts={filteredContacts} onDelete={deleteContact} />
      )}
    </PhonebookWrapper>
  );
};
