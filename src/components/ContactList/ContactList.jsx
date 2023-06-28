import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ data, deleteContact }) => (
  <List>
    {data.map(({ id, name, number }) => {
      return (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      );
    })}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  data: PropTypes.array,
  deleteContact: PropTypes.func,
};
