import PropTypes from 'prop-types';
import { Form, InputName, FilterValue } from './Filter.styled';

const Filter = ({ value, changeFilter }) => (
  <Form>
    <InputName>
      Find contacts by name:
      <FilterValue type="text" value={value} onChange={changeFilter} />
    </InputName>
  </Form>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
