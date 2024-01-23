import { useDispatch, useSelector } from 'react-redux';
import {
  ContactInfo,
  ContactItem,
  ContactList,
  DeleteContactBtn,
  FilterErrorMessage,
} from './Contacts.styled';
import { deleteContact } from '../../redux/phonebook/actions';
import { selectContacts, selectFilter } from '../../redux/phonebook/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactList>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(item => (
          <ContactItem key={item.id}>
            <ContactInfo>
              <span>&#128100;</span>
              <span>
                {item.name}: {item.number}
              </span>
            </ContactInfo>
            <DeleteContactBtn
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </DeleteContactBtn>
          </ContactItem>
        ))
      ) : (
        <FilterErrorMessage>
          Could not find contacts with this name!
        </FilterErrorMessage>
      )}
    </ContactList>
  );
};
