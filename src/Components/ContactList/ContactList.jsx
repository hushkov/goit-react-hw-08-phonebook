import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from 'Components/ContactList/ContactListItem/ContactListItem';
import s from 'Components/ContactList/ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts-operations';
import { getFilteredList } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(state => getFilteredList(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.contacts}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          name={name}
          number={number}
          id={id}
          onDelete={onDeleteContact}
          key={id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
