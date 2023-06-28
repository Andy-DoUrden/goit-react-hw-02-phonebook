import PropTypes from 'prop-types';
import { Contact, ContactValue, RemoveContact } from './ContactItem.styled';

const ContactItem = ({ name, number, id, deleteContact }) => (
  <Contact>
    <ContactValue>{name}</ContactValue>

    <ContactValue>{number}</ContactValue>

    <RemoveContact
      type="button"
      onClick={() => {
        deleteContact(id);
      }}
    >
      Delete
    </RemoveContact>
  </Contact>
);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
