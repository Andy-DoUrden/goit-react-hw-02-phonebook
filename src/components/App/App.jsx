import { Component } from 'react';
import shortid from 'shortid';
import { Container, PhonebookContainer, Title, ListTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { contacts, filter } = this.state;

    const normalizedFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  addContact = (name, number) => {
    const previousNames = this.state.contacts.map(contact => contact.name);

    if (previousNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getVisibleTodos();

    return (
      <Container>
        <PhonebookContainer>
          <Title>Phonebook</Title>

          <ContactForm addContact={this.addContact} />

          <ListTitle>Contacts</ListTitle>

          <Filter value={filter} changeFilter={this.changeFilter} />

          <ContactList
            data={filteredContacts}
            deleteContact={this.handleDeleteContact}
          />
        </PhonebookContainer>
      </Container>
    );
  }
}
