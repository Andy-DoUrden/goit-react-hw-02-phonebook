import styled from '@emotion/styled';

const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
`;

const ContactValue = styled.span`
  width: 300px;
  font-size: 20px;
  color: #f2ab26;
  color: ${props => {
    if (props.isCompleted === true) {
      return '#00f90f';
    } else if (props.isCompleted === false) {
      return '#ff0000';
    }
    return '#f2ab26';
  }};
`;

const RemoveContact = styled.button`
  width: 100px;
  height: 40px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #290000;
    border: 2px solid #c81a00;
    color: #c81a00;
  }
`;

export { Contact, ContactValue, RemoveContact };
