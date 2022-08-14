import { nanoid } from 'nanoid';
import {useState, useEffect} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

  export default function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
  
    const addContact = event => {
      console.log(event)
      event.preventDefault();
    const dataContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    }
    
    const repeatContacts = contacts.find(elem => elem.name === event.target.name.value);
   
    if (repeatContacts) {
      alert(`${repeatContacts.name} is already in contacts`)
    } else {
      setContacts(prevState => [dataContact, ...prevState],
      );
    }
  };
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const  deleteContacts = id => {
      setContacts(prevState => (prevState.filter(contact => contact.id !== id)
    ));
    };

  const visibleContacts = getVisibleContacts();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101'
        }}
      >
       <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContacts={deleteContacts}/>
      </div>
    );
  };


