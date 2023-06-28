import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  InputBlock,
  InputName,
  NewContactValue,
  AddContact,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputBlock>
          <InputName>Name:</InputName>
          <NewContactValue
            type="text"
            name="name"
            value={name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
        </InputBlock>

        <InputBlock>
          <InputName>Number:</InputName>
          <NewContactValue
            type="tel"
            name="number"
            value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
        </InputBlock>

        <AddContact>Add contact</AddContact>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
