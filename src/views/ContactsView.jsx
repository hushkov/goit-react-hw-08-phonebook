import ContactForm from 'Components/ContactForm/ContactForm';
import ContactList from 'Components/ContactList/ContactList';
import Filter from 'Components/Filter/Filter';
import Section from 'Components/Section/Section';
import s from './ContactsView.module.css';

const ContactsView = () => {
  return (
    <div className={s.ContactsView}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default ContactsView;
