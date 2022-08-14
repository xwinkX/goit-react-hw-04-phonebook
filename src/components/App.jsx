import { nanoid } from 'nanoid';
import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {

state = {
  contacts: [],
  filter:''
}

  addContact = data => {
    const dataContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    const contacts = this.state.contacts;
    const repeatContacts = contacts.find(elem => elem.name === data.name);
   
    if (repeatContacts) {
      alert(`${repeatContacts.name} is already in contacts`)
    } else {
      this.setState(prevState => ({
        contacts: [dataContact, ...prevState.contacts],
      }));
    }
  };
  
componentDidUpdate(prevState) {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };     
};
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    };
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

    deleteContacts = id => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }));
    };


  render() {
    const {  filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
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
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContacts={this.deleteContacts}/>
      </div>
    );
  };
};

export default App;